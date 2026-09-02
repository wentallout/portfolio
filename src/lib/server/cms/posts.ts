import { z } from 'zod';
import readingTime from 'reading-time';
import { getDb } from '../db/client.js';
import { posts, projects } from '../db/schema.js';
import { eq } from 'drizzle-orm';

export const postInputSchema = z.object({
	title: z.string().min(3).max(200),
	slug: z
		.string()
		.min(2)
		.max(100)
		.regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'slug must be kebab-case'),
	excerpt: z.string().max(400).optional().nullable(),
	contentJson: z.record(z.string(), z.unknown()),
	contentHtml: z.string().min(1),
	contentMarkdown: z.string().optional().nullable(),
	coverImageUrl: z.string().url().optional().nullable().or(z.literal('')),
	coverImageAlt: z.string().max(200).optional().nullable(),
	status: z.enum(['draft', 'published', 'archived']).default('draft'),
	publishedAt: z.string().datetime().optional().nullable(),
	scheduledAt: z.string().datetime().optional().nullable(),
	seoTitle: z.string().max(70).optional().nullable(),
	seoDescription: z.string().max(170).optional().nullable(),
	seoKeywords: z.array(z.string()).optional().nullable(),
	canonicalUrl: z.string().url().optional().nullable().or(z.literal('')),
	ogImageUrl: z.string().url().optional().nullable().or(z.literal('')),
	noindex: z.boolean().optional(),
	featured: z.boolean().optional(),
	categoryIds: z.array(z.string().uuid()).optional(),
	tagIds: z.array(z.string().uuid()).optional()
});

export function slugify(input: string) {
	return input
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '')
		.slice(0, 100);
}

export function computeReading(html: string) {
	const rt = readingTime(html);
	return { readingTime: Math.ceil(rt.minutes), wordCount: rt.words };
}

export async function ensureUniqueSlug(base: string, excludeId?: string) {
	const db = getDb();
	let slug = slugify(base);
	if (!slug) slug = 'untitled';
	let candidate = slug;
	let i = 2;
	for (;;) {
		const existing = await db.select({ id: posts.id }).from(posts).where(eq(posts.slug, candidate)).limit(1);
		if (existing.length === 0 || (excludeId && existing[0].id === excludeId)) return candidate;
		// also check projects
		const existingProj = await db.select({ id: projects.id }).from(projects).where(eq(projects.slug, candidate)).limit(1);
		if (existingProj.length === 0 || (excludeId && existingProj[0].id === excludeId)) return candidate;
		candidate = `${slug}-${i++}`;
		if (i > 100) throw new Error('Slug collision too deep');
	}
}
