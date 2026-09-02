/**
 * Structured JSON logger for SvelteKit server.
 * Emits JSON lines for prod (easy to ship to Loki/Datadog).
 * In dev it still emits JSON but prefix is readable via console.
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

function emit(level: Level, message: string, ctx: LogContext = {}) {
	const record = {
		timestamp: new Date().toISOString(),
		level,
		msg: message,
		...redact(ctx)
	};
	const line = JSON.stringify(record);

	// Route to appropriate console method so Netlify/Vercel picks up severity
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
