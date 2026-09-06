/**
 * Structured logger for SvelteKit server.
 * - prod: single-line JSON (ship to Loki/Datadog)
 * - dev : human-readable, colored, deduped, trimmed stacks
 *
 * Usage:
 *   import { createLogger } from '#lib/server/logger.js';
 *   const logger = createLogger(event.locals.requestId);
 *   logger.info('Creating order', { userId });
 */

type Level = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';

export type LogContext = Record<string, unknown>;

const SENSITIVE_KEYS = new Set([
	'password',
	'passwd',
	'secret',
	'cookie',
	'authorization',
	'auth_token',
	'session_token',
	'token'
]);

function redact(obj: LogContext): LogContext {
	const out: LogContext = {};
	for (const [k, v] of Object.entries(obj)) {
		if (SENSITIVE_KEYS.has(k.toLowerCase())) {
			out[k] = '[REDACTED]';
		} else if (v !== null && typeof v === 'object' && !Array.isArray(v)) {
			out[k] = redact(v as LogContext);
		} else {
			out[k] = v;
		}
	}
	return out;
}

// ── helpers ──────────────────────────────────────────────────────────

const isProd = process.env.NODE_ENV === 'production';

// ANSI colors (disabled in prod/Json)
const C = {
	reset: '\x1b[0m',
	dim: '\x1b[2m',
	bold: '\x1b[1m',
	red: '\x1b[31m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	cyan: '\x1b[36m',
	magenta: '\x1b[35m',
	gray: '\x1b[90m'
} as const;

function levelColor(level: Level): string {
	switch (level) {
		case 'error':
		case 'fatal':
			return C.red;
		case 'warn':
			return C.yellow;
		case 'info':
			return C.green;
		case 'debug':
		case 'trace':
			return C.gray;
		default:
			return C.reset;
	}
}

function formatTime(d = new Date()): string {
	// HH:MM:SS.mmm
	return d.toISOString().slice(11, 23);
}

function shortId(id: string): string {
	return id.slice(0, 8);
}

function relativeStack(stack?: string): string | undefined {
	if (!stack) return undefined;
	const lines = stack.split('\n');
	// Keep first line (error name) + up to 8 relevant frames
	const cleaned: string[] = [];
	for (const raw of lines) {
		let line = raw;
		// shorten absolute Windows/Unix paths to workspace-relative
		line = line.replace(/D:\\OfficialProjects\\portfolio\\/g, '');
		line = line.replace(/D:\/OfficialProjects\/portfolio\//g, '');
		// skip noisy svelte internal frames beyond first 2 app frames if too long
		const isInternal =
			line.includes('node_modules/.pnpm/svelte@') ||
			line.includes('node_modules/svelte/') ||
			line.includes('svelte/src/internal');
		// Keep internal lines but dim them later; don't filter entirely so debugging still possible
		// Trim very long paths
		if (line.length > 220) line = line.slice(0, 220) + '…';
		cleaned.push(line);
		if (cleaned.length >= 12) break;
	}
	// Collapse if still huge
	if (cleaned.length > 10) return cleaned.slice(0, 10).join('\n') + `\n    … +${lines.length - 10} frames`;
	return cleaned.join('\n');
}

function statusColor(status?: number): string {
	if (status == null) return C.reset;
	if (status >= 500) return C.red;
	if (status >= 400) return C.yellow;
	if (status >= 300) return C.cyan;
	return C.green;
}

// ── dedup ────────────────────────────────────────────────────────────
// Group identical errors within same request / short window to avoid
// spamming "lifecycle_outside_component (x2)" as two full JSON blobs.

type DedupEntry = { count: number; lastAt: number };
const dedup = new Map<string, DedupEntry>();
const DEDUP_WINDOW_MS = 1500;

function dedupKey(level: Level, msg: string, ctx: LogContext): string {
	const firstLine = msg.split('\n')[0].trim().slice(0, 160);
	const path = (ctx.path as string) ?? '';
	const type = (ctx.type as string) ?? '';
	const status = (ctx.status as string | number) ?? '';
	const method = (ctx.method as string) ?? '';
	return `${level}:${type}:${firstLine}:${path}:${status}:${method}`;
}

// ── emit ─────────────────────────────────────────────────────────────

function emit(level: Level, message: string, ctx: LogContext = {}) {
	const safeCtx = redact(ctx) as LogContext;
	const requestId = (safeCtx.requestId as string) ?? undefined;

	// ---- dedup check (dev + prod) ----
	const key = dedupKey(level, message, safeCtx);
	const now = Date.now();
	const prev = dedup.get(key);
	if (prev && now - prev.lastAt < DEDUP_WINDOW_MS) {
		prev.count += 1;
		prev.lastAt = now;
		// In dev, re-print a compact bump line instead of full duplicate
		if (!isProd) {
			const bump = `${C.dim}${formatTime()}${C.reset} ${levelColor(level)}${level.toUpperCase().padEnd(5)}${C.reset} ${C.dim}${requestId ? shortId(requestId) : '—'}${C.reset} ${C.dim}(×${prev.count})${C.reset} ${message.split('\n')[0].slice(0, 140)} ${C.dim}// ${safeCtx.path ?? ''}${C.reset}`;
			// Use same console method but as single bump
			const fn = level === 'error' || level === 'fatal' ? console.error : level === 'warn' ? console.warn : console.log;
			fn(bump);
		}
		return;
	}
	dedup.set(key, { count: 1, lastAt: now });
	// auto-evict after window
	setTimeout(() => {
		const cur = dedup.get(key);
		if (cur && Date.now() - cur.lastAt >= DEDUP_WINDOW_MS) dedup.delete(key);
	}, DEDUP_WINDOW_MS + 500);

	// ---- prod: JSON line ----
	if (isProd) {
		const record: Record<string, unknown> = {
			timestamp: new Date().toISOString(),
			level,
			msg: message.split('\n')[0],
			...safeCtx
		};
		// Trim stack for prod to keep JSON small but useful
		if (typeof record.stack === 'string') {
			record.stack = relativeStack(record.stack as string);
		}
		const line = JSON.stringify(record);
		switch (level) {
			case 'trace':
			case 'debug':
				console.debug(line);
				break;
			case 'info':
				console.log(line);
				break;
			case 'warn':
				console.warn(line);
				break;
			case 'error':
			case 'fatal':
				console.error(line);
				break;
		}
		return;
	}

	// ---- dev: pretty ----
	const time = formatTime();
	const rid = requestId ? shortId(requestId) : '—';
	const method = (safeCtx.method as string) ?? '';
	const path = (safeCtx.path as string) ?? '';
	const status = safeCtx.status as number | undefined;
	const duration = safeCtx.duration_ms as number | undefined;

	// Special pretty for request logs
	const isRequest = safeCtx.type === 'request' || message === 'request';
	if (isRequest) {
		const sc = statusColor(status);
		const dur = duration != null ? `${C.dim}${duration}ms${C.reset}` : '';
		const line = `${C.dim}${time}${C.reset} ${sc}${String(status ?? '').padStart(3)}${C.reset} ${C.bold}${method.padEnd(4)}${C.reset} ${path} ${dur} ${C.dim}${rid}${C.reset}`;
		console.log(line);
		return;
	}

	// Generic / error pretty
	const lc = levelColor(level);
	const firstLine = message.split('\n')[0].slice(0, 160);
	const secondLine = message.split('\n')[1]?.slice(0, 160);
	const statusPart = status != null ? ` ${statusColor(status)}${status}${C.reset}` : '';
	const pathPart = path ? ` ${C.dim}${path}${C.reset}` : '';
	const ridPart = ` ${C.dim}${rid}${C.reset}`;

	let header = `${C.dim}${time}${C.reset} ${lc}${level.toUpperCase().padEnd(5)}${C.reset}${ridPart}${statusPart}${pathPart} ${firstLine}`;
	if (secondLine && secondLine.trim() && secondLine !== firstLine) {
		header += `${C.dim} — ${secondLine.trim()}${C.reset}`;
	}

	const fn =
		level === 'error' || level === 'fatal' ? console.error : level === 'warn' ? console.warn : console.log;
	fn(header);

	// Stack — dimmed, indented, trimmed
	const rawStack = safeCtx.stack as string | undefined;
	if (rawStack && (level === 'error' || level === 'fatal' || level === 'warn')) {
		const prettyStack = relativeStack(rawStack);
		if (prettyStack) {
			// Only show stack beyond the first line (already in header)
			const stackBody = prettyStack
				.split('\n')
				.slice(1)
				.map((l) => `${C.dim}  ${l}${C.reset}`)
				.join('\n');
			if (stackBody.trim()) fn(stackBody);
		}
		// Optional cause
		if (safeCtx.cause) {
			fn(`${C.dim}  cause: ${String(safeCtx.cause).slice(0, 200)}${C.reset}`);
		}
	}
}

export type Logger = {
	trace: (msg: string, ctx?: LogContext) => void;
	debug: (msg: string, ctx?: LogContext) => void;
	info: (msg: string, ctx?: LogContext) => void;
	warn: (msg: string, ctx?: LogContext) => void;
	error: (msg: string, ctx?: LogContext) => void;
	fatal: (msg: string, ctx?: LogContext) => void;
	child: (extra: LogContext) => Logger;
};

export function createLogger(requestId?: string, baseContext: LogContext = {}): Logger {
	const base: LogContext = { ...(requestId ? { requestId } : {}), ...baseContext };

	const mk = (level: Level) => (msg: string, ctx: LogContext = {}) =>
		emit(level, msg, { ...base, ...ctx });

	const logger: Logger = {
		trace: mk('trace'),
		debug: mk('debug'),
		info: mk('info'),
		warn: mk('warn'),
		error: mk('error'),
		fatal: mk('fatal'),
		child: (extra: LogContext) => createLogger(requestId, { ...base, ...extra })
	};
	return logger;
}

// Convenience for request logging
export function logRequest(opts: {
	requestId: string;
	method: string;
	path: string;
	status: number;
	duration_ms: number;
	userId?: string | null;
}) {
	emit('info', 'request', { type: 'request', ...opts });
}

export function logError(opts: {
	requestId?: string;
	message: string;
	stack?: string;
	path?: string;
	status?: number;
	cause?: unknown;
}) {
	emit('error', opts.message, { type: 'error', ...opts });
}
