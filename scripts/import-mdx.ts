#!/usr/bin/env tsx
import 'dotenv/config';
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { marked } from 'marked';
import { neon } from '@neondatabase/serverless';

// We avoid drizzle for import — use raw neon http.
async function main() {
	const dbUrl = process.env.DATABASE_URL ?? process.env.DATABASE_URL_UNPOOLED;
	if (!dbUrl) throw new Error('DATABASE_URL missing');
	const sql = neon(dbUrl);

	const blogsDir = 'archive/blogs';
	const projectsDir = 'archive/projects';

	const blogFiles = fs.readdirSync(blogsDir).filter((f) => f.endsWith('.svx'));
	const projectFiles = fs.readdirSync(projectsDir).filter((f) => f.endsWith('.svx'));

	console.log(`Found ${blogFiles.length} blog files, ${projectFiles.length} project files`);

	// Helpers
	const slugify = (s: string) =>
		s
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-|-$/g, '');
	const excerptFrom = (md: string) => md.replace(/[#*_`>\[\]]/g, '').trim().slice(0, 280);

	// Simple markdown -> html (naive, stores raw markdown as fallback; html derived minimally)
	// We store placeholder Tiptap JSON (empty doc with markdown) — editor will convert on first edit.
	const toTiptapJSON = (markdown: string) => ({
		type: 'doc',
		content: [
			{
				type: 'paragraph',
				content: [{ type: 'text', text: markdown.slice(0, 5000) }]
			}
		]
	});

	const importEntry = async (filePath: string, type: 'post' | 'project') => {
		const raw = fs.readFileSync(filePath, 'utf8');
		// mdsvex frontmatter uses yaml; gray-matter compatible
		const parsed = matter(raw);
		const data = parsed.data as Record<string, unknown>;
		const mdBody = parsed.content.trim();
		const filename = path.basename(filePath, '.svx');
		const slug = slugify(String(data.slug ?? filename));
		const title = String(data.title ?? filename);
		const excerpt = String(data.description ?? data.excerpt ?? excerptFrom(mdBody));
		const dateStr = data.date ? String(data.date) : undefined;
		const publishedAt = dateStr ? new Date(dateStr) : null;
		// categories/tags
		const categoriesRaw = (data.categories as string[] | string | undefined) ?? [];
		const categories: string[] = Array.isArray(categoriesRaw)
			? categoriesRaw.map((c) => String(c).trim().toLowerCase()).filter(Boolean)
			: String(categoriesRaw)
					.split(',')
					.map((s) => s.trim().toLowerCase())
					.filter(Boolean);
		const tagsRaw = (data.tags as string[] | string | undefined) ?? [];
		const tags: string[] = Array.isArray(tagsRaw)
			? tagsRaw.map((c) => String(c).trim().toLowerCase()).filter(Boolean)
			: String(tagsRaw)
					.split(',')
					.map((s) => s.trim().toLowerCase())
					.filter(Boolean);

		const rt = readingTime(mdBody);
		const wordCount = mdBody.split(/\s+/).length;

		const html = await marked.parse(mdBody, { gfm: true, breaks: false });

		// Upsert categories/tags
		const catIds: string[] = [];
		for (const cat of categories) {
			const slugCat = slugify(cat);
			if (!slugCat) continue;
			const rows = await sql`SELECT id FROM categories WHERE slug = ${slugCat} LIMIT 1`;
			let catId: string;
			if (rows.length > 0) catId = rows[0].id as string;
			else {
				const ins = await sql`INSERT INTO categories (slug, name) VALUES (${slugCat}, ${cat}) RETURNING id`;
				catId = ins[0].id as string;
			}
			catIds.push(catId);
		}
		const tagIds: string[] = [];
		for (const t of tags) {
			const slugTag = slugify(t);
			if (!slugTag) continue;
			const rows = await sql`SELECT id FROM tags WHERE slug = ${slugTag} LIMIT 1`;
			let tagId: string;
			if (rows.length > 0) tagId = rows[0].id as string;
			else {
				const ins = await sql`INSERT INTO tags (slug, name) VALUES (${slugTag}, ${t}) RETURNING id`;
				tagId = ins[0].id as string;
			}
			tagIds.push(tagId);
		}

		if (type === 'post') {
			// upsert post by slug
			const existing = await sql`SELECT id FROM posts WHERE slug = ${slug} LIMIT 1`;
			let postId: string;
			if (existing.length > 0) {
				postId = existing[0].id as string;
				await sql`UPDATE posts SET title=${title}, excerpt=${excerpt}, content_json=${JSON.stringify(toTiptapJSON(mdBody))}::jsonb, content_html=${html}, content_markdown=${mdBody}, status='published', published_at=${publishedAt?.toISOString() ?? null}::timestamptz, word_count=${wordCount}, reading_time=${Math.ceil(rt.minutes)}, seo_title=${title}, seo_description=${excerpt.slice(0, 155)}, updated_at=now() WHERE id=${postId}`;
			} else {
				const ins = await sql`INSERT INTO posts (slug, title, excerpt, content_json, content_html, content_markdown, status, published_at, word_count, reading_time, seo_title, seo_description) VALUES (${slug}, ${title}, ${excerpt}, ${JSON.stringify(toTiptapJSON(mdBody))}::jsonb, ${html}, ${mdBody}, 'published', ${publishedAt?.toISOString() ?? null}::timestamptz, ${wordCount}, ${Math.ceil(rt.minutes)}, ${title}, ${excerpt.slice(0, 155)}) RETURNING id`;
				postId = ins[0].id as string;
			}
			for (const cid of catIds) await sql`INSERT INTO posts_to_categories (post_id, category_id) VALUES (${postId}, ${cid}) ON CONFLICT DO NOTHING`;
			for (const tid of tagIds) await sql`INSERT INTO posts_to_tags (post_id, tag_id) VALUES (${postId}, ${tid}) ON CONFLICT DO NOTHING`;
		} else {
			const repoUrl = (data.repo as string) ?? (data.repoUrl as string) ?? null;
			const demoUrl = (data.demo as string) ?? (data.demoUrl as string) ?? null;
			const tech = (data.tech as string[]) ?? (data.stack as string[]) ?? (data.tech_stack as string[]) ?? null;
			const existing = await sql`SELECT id FROM projects WHERE slug = ${slug} LIMIT 1`;
			let projId: string;
			if (existing.length > 0) {
				projId = existing[0].id as string;
				await sql`UPDATE projects SET title=${title}, excerpt=${excerpt}, content_json=${JSON.stringify(toTiptapJSON(mdBody))}::jsonb, content_html=${html}, content_markdown=${mdBody}, status='published', published_at=${publishedAt?.toISOString() ?? null}::timestamptz, word_count=${wordCount}, reading_time=${Math.ceil(rt.minutes)}, seo_title=${title}, seo_description=${excerpt.slice(0,155)}, repo_url=${repoUrl}, demo_url=${demoUrl}, tech_stack=${tech}::text[], updated_at=now() WHERE id=${projId}`;
			} else {
				const ins = await sql`INSERT INTO projects (slug, title, excerpt, content_json, content_html, content_markdown, status, published_at, word_count, reading_time, seo_title, seo_description, repo_url, demo_url, tech_stack) VALUES (${slug}, ${title}, ${excerpt}, ${JSON.stringify(toTiptapJSON(mdBody))}::jsonb, ${html}, ${mdBody}, 'published', ${publishedAt?.toISOString() ?? null}::timestamptz, ${wordCount}, ${Math.ceil(rt.minutes)}, ${title}, ${excerpt.slice(0,155)}, ${repoUrl}, ${demoUrl}, ${tech}::text[]) RETURNING id`;
				projId = ins[0].id as string;
			}
			for (const cid of catIds) await sql`INSERT INTO projects_to_categories (project_id, category_id) VALUES (${projId}, ${cid}) ON CONFLICT DO NOTHING`;
			for (const tid of tagIds) await sql`INSERT INTO projects_to_tags (project_id, tag_id) VALUES (${projId}, ${tid}) ON CONFLICT DO NOTHING`;
		}
		console.log(`  ✓ ${type} ${slug}`);
	};

	for (const f of blogFiles) await importEntry(path.join(blogsDir, f), 'post');
	for (const f of projectFiles) await importEntry(path.join(projectsDir, f), 'project');

	const counts = await sql`SELECT (SELECT count(*) FROM posts) as posts, (SELECT count(*) FROM projects) as projects`;
	console.log('Done:', counts[0]);
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
