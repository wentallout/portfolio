#!/usr/bin/env tsx
// Migrate project images from local/assets + base64 bloat to Cloudinary
// Usage:
//   pnpm tsx scripts/migrate-projects-to-cloudinary.ts          # dry-run (no upload if CLOUDINARY_URL missing)
//   CLOUDINARY_URL=cloudinary://... pnpm tsx scripts/migrate-projects-to-cloudinary.ts --apply
// Docs: https://cloudinary.com/documentation/node_integration#configuration

import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { neon } from '@neondatabase/serverless';
import { v2 as cloudinary } from 'cloudinary';

const DRY = !process.argv.includes('--apply');
const VERBOSE = process.argv.includes('--verbose');

async function main() {
	const dbUrl = process.env.DATABASE_URL ?? process.env.DATABASE_URL_UNPOOLED;
	if (!dbUrl) throw new Error('DATABASE_URL missing');
	const sql = neon(dbUrl);

	// Configure cloudinary (auto-reads CLOUDINARY_URL)
	const hasCloudinary = !!(process.env.CLOUDINARY_URL || (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET));
	if (hasCloudinary) {
		cloudinary.config({ secure: true });
		console.log('Cloudinary configured:', hasCloudinary, 'cloud:', process.env.CLOUDINARY_CLOUD_NAME || new URL(process.env.CLOUDINARY_URL || 'cloudinary://').hostname);
	} else {
		console.warn('⚠ CLOUDINARY_URL not set — running in DRY/no-upload mode. HTML will be regenerated with local data:image fallback or static paths, then you can re-run with --apply after setting env.');
	}

	const archiveDir = path.join(process.cwd(), 'archive/projects');
	const assetBase = path.join(process.cwd(), 'src/lib/assets/images/projects');

	// Slugs from archive + DB (ensure all 5)
	const archiveFiles = fs.readdirSync(archiveDir).filter(f => f.endsWith('.svx'));
	console.log(`Found ${archiveFiles.length} archive project files`);

	for (const file of archiveFiles) {
		const slug = path.basename(file, '.svx');
		const filePath = path.join(archiveDir, file);
		const raw = fs.readFileSync(filePath, 'utf8');
		const parsed = matter(raw);
		const frontmatter = parsed.data;
		let mdBody = parsed.content; // includes <script> block

		// Extract <script>...</script> imports
		const scriptMatch = mdBody.match(/<script[^>]*>([\s\S]*?)<\/script>/i);
		const scriptContent = scriptMatch ? scriptMatch[1] : '';
		// Remove script block from markdown body for final content
		mdBody = mdBody.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '').trim();

		// Parse imports: import varName from '#lib/assets/images/projects/...'
		const importRe = /import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g;
		let m: RegExpExecArray | null;
		const varToLocal: Record<string, string> = {};
		const varToPublicId: Record<string, string> = {};
		const imports: Array<{ varName: string; libPath: string; localPath: string }> = [];
		while ((m = importRe.exec(scriptContent)) !== null) {
			const varName = m[1];
			const libPath = m[2];
			if (libPath.includes('/components/')) continue; // skip Image component
			if (!/\.(png|jpg|jpeg|webp|gif|svg|avif)$/i.test(libPath)) continue;
			const localPath = path.join(process.cwd(), libPath.replace('#lib/', 'src/lib/'));
			if (!fs.existsSync(localPath)) {
				console.warn(`  ${slug}: missing file ${localPath} (import ${varName})`);
				continue;
			}
			varToLocal[varName] = localPath;
			imports.push({ varName, libPath, localPath });
		}

		// Also handle thumbnail conventionally if not imported but exists in asset folder (stock-grabber)
		if (imports.length === 0 && slug === 'stock-grabber') {
			const thumbPath = path.join(assetBase, 'stock-grabber/thumbnail.jpg');
			if (fs.existsSync(thumbPath)) {
				varToLocal['thumbnail'] = thumbPath;
				imports.push({ varName: 'thumbnail', libPath: '#lib/assets/images/projects/stock-grabber/thumbnail.jpg', localPath: thumbPath });
			}
		}

		console.log(`\n--- ${slug} (${frontmatter.title || slug}) imports=${imports.length} DRY=${DRY} hasCloudinary=${hasCloudinary}`);

		// Upload each to Cloudinary
		const varToUrl: Record<string, string> = {};
		for (const imp of imports) {
			const ext = path.extname(imp.localPath);
			const base = path.basename(imp.localPath, ext);
			// public_id without extension, under portfolio/projects/<slug>
			const publicId = `portfolio/projects/${slug}/${base}`;
			let secureUrl: string;
			if (hasCloudinary && !DRY) {
				try {
					const res = await cloudinary.uploader.upload(imp.localPath, {
						public_id: publicId,
						folder: undefined, // publicId already includes folder
						overwrite: true,
						resource_type: 'auto',
						quality: 'auto',
						fetch_format: 'auto'
					});
					secureUrl = res.secure_url as string;
					console.log(`  ↑ ${imp.varName} -> ${secureUrl} (${res.bytes} bytes)`);
				} catch (e: any) {
					console.error(`  ✗ upload failed ${imp.localPath}:`, e.message || e);
					// fallback to data URI
					const b64 = fs.readFileSync(imp.localPath).toString('base64');
					const mime = imp.localPath.endsWith('.gif') ? 'image/gif' : imp.localPath.endsWith('.jpg') || imp.localPath.endsWith('.jpeg') ? 'image/jpeg' : imp.localPath.endsWith('.webp') ? 'image/webp' : imp.localPath.endsWith('.svg') ? 'image/svg+xml' : 'image/png';
					secureUrl = `data:${mime};base64,${b64}`;
				}
			} else if (hasCloudinary && DRY) {
				const cloudName = process.env.CLOUDINARY_CLOUD_NAME || '<cloud_name>';
				secureUrl = `https://res.cloudinary.com/${cloudName}/image/upload/${publicId}${ext}`;
				console.log(`  (dry) ${imp.varName} -> ${secureUrl}`);
			} else {
				// No Cloudinary configured: immediate local fix via data:image fallback (avoids placeholder break)
				const b64 = fs.readFileSync(imp.localPath).toString('base64');
				const mime = imp.localPath.endsWith('.gif') ? 'image/gif' : imp.localPath.endsWith('.jpg') || imp.localPath.endsWith('.jpeg') ? 'image/jpeg' : imp.localPath.endsWith('.webp') ? 'image/webp' : imp.localPath.endsWith('.svg') ? 'image/svg+xml' : 'image/png';
				secureUrl = `data:${mime};base64,${b64.slice(0, 30)}...[${Math.round(b64.length/1024)}KB data]`; // placeholder log
				// actual full data URI for DB patch when DRY==false; dry just logs truncated
				const fullDataUri = `data:${mime};base64,${fs.readFileSync(imp.localPath).toString('base64')}`;
				if (DRY) {
					console.log(`  (dry,no-cloudinary) ${imp.varName} -> data:image[${Math.round(fullDataUri.length/1024)}KB]`);
					secureUrl = `data:${mime};base64,PLACEHOLDER_FOR_${imp.varName}`;
				} else {
					secureUrl = fullDataUri;
					console.log(`  (local fallback) ${imp.varName} -> data:image ${Math.round(secureUrl.length/1024)}KB`);
				}
			}
			varToUrl[imp.varName] = secureUrl;
			varToPublicId[imp.varName] = publicId;
		}

		// Replace <Image src={varName} .../> and <Image ... src={varName} /> etc with <img>
		// Also handle <img src={varName} etc? Archive uses <Image>
		let newMd = mdBody;
		// Replace Svelte Image component usages
		// Pattern: <Image ... src={varName} ... /> or <Image src={varName}/>
		// Also handle thumbnail special case in reza: <Image loading="eager" src={thumbnail} alt="reza thumbnail" />
		for (const [varName, url] of Object.entries(varToUrl)) {
			// Replace all occurrences of src={varName}
			// We convert <Image ... src={varName} ...> to <img src="url" alt="varName">
			const imgRe = new RegExp(`<Image([^>]*?)src=\\{${varName}\\}([^>]*?)\\/?>`, 'g');
			newMd = newMd.replace(imgRe, (_match, before, after) => {
				// Extract alt if present in before+after
				const altMatch = (before + after).match(/alt=['"]([^'"]*)['"]/);
				const alt = altMatch ? altMatch[1] : varName;
				const extra = (before + after).replace(/alt=['"][^'"]*['"]/g, '').replace(/loading=['"][^'"]*['"]/g, '').trim();
				// Keep loading eager/lazy if was there
				const loadingMatch = (before + after).match(/loading=['"]([^'"]*)['"]/);
				const loading = loadingMatch ? ` loading="${loadingMatch[1]}"` : ' loading="lazy"';
				return `<img src="${url}" alt="${alt}"${loading} />`;
			});
			// Also handle plain {varName} unlikely but just in case
		}
		// Also handle any remaining <Image> without var (should not happen)
		// If after replacement there is still <Image, warn
		if (newMd.includes('<Image')) {
			console.warn(`  ⚠ ${slug} still has <Image> after replacement — check syntax`);
			if (VERBOSE) console.log(newMd.slice(0, 1000));
		}

		// Generate HTML via marked (like import-mdx does)
		const html = await marked.parse(newMd, { gfm: true, breaks: false });

		// Determine cover image: prefer var named thumbnail, else first import
		let coverUrl: string | null = null;
		if (varToUrl['thumbnail']) coverUrl = varToUrl['thumbnail'];
		else if (varToUrl['thumbnail'.toLowerCase()]) coverUrl = varToUrl['thumbnail'];
		else {
			// Check for any var containing thumb
			const thumbVar = Object.keys(varToUrl).find(k => k.toLowerCase().includes('thumb'));
			if (thumbVar) coverUrl = varToUrl[thumbVar];
			else if (imports.length > 0) coverUrl = varToUrl[imports[0].varName];
		}
		if (!coverUrl && slug === 'stock-grabber' && varToUrl['thumbnail']) coverUrl = varToUrl['thumbnail'];

		console.log(`  cover: ${coverUrl || 'null'} | html ${html.length} bytes | md ${newMd.length} bytes`);

		if (DRY) {
			console.log(`  DRY: would UPDATE projects SET cover_image_url, content_html, content_markdown WHERE slug='${slug}'`);
			continue;
		}

		// Patch DB
		// Use neon sql template; need to handle large text (up to 14MB currently -> after fix ~ few KB)
		const existing = await sql`SELECT id FROM projects WHERE slug=${slug} LIMIT 1`;
		if (existing.length === 0) {
			console.warn(`  DB missing project ${slug} - skipping`);
			continue;
		}
		const id = existing[0].id;
		await sql`UPDATE projects SET cover_image_url=${coverUrl}, cover_image_alt=${slug}, content_html=${html}, content_markdown=${newMd}, updated_at=now() WHERE id=${id}`;
		console.log(`  ✓ Patched DB ${slug}`);
	}

	const counts = await sql`SELECT slug, length(content_html) as len, cover_image_url FROM projects ORDER BY slug`;
	console.log('\nDone - final sizes:');
	for (const r of counts) console.log(`  ${r.slug}: ${r.len} bytes cover=${r.cover_image_url ? 'set' : 'null'}`);

	if (DRY) console.log('\nDry run complete. Set CLOUDINARY_URL and re-run with --apply to actually upload & patch DB.');
}

main().catch(e => { console.error(e); process.exit(1); });
