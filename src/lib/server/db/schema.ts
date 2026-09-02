import {
	pgTable,
	text,
	uuid,
	timestamp,
	integer,
	boolean,
	pgEnum,
	jsonb,
	primaryKey,
	index
} from 'drizzle-orm/pg-core';

export const entryStatusEnum = pgEnum('entry_status', ['draft', 'published', 'archived']);

export const posts = pgTable(
	'posts',
	{
		id: uuid('id').primaryKey().defaultRandom(),
		slug: text('slug').notNull().unique(),
		title: text('title').notNull(),
		excerpt: text('excerpt'),
		contentJson: jsonb('content_json').notNull().$type<Record<string, unknown>>(),
		contentHtml: text('content_html').notNull(),
		contentMarkdown: text('content_markdown'),
		coverImageUrl: text('cover_image_url'),
		coverImageAlt: text('cover_image_alt'),
		status: entryStatusEnum('status').notNull().default('draft'),
		publishedAt: timestamp('published_at', { withTimezone: true }),
		scheduledAt: timestamp('scheduled_at', { withTimezone: true }),
		authorId: text('author_id'),
		readingTime: integer('reading_time'),
		wordCount: integer('word_count'),
		seoTitle: text('seo_title'),
		seoDescription: text('seo_description'),
		seoKeywords: text('seo_keywords').array(),
		canonicalUrl: text('canonical_url'),
		ogImageUrl: text('og_image_url'),
		noindex: boolean('noindex').notNull().default(false),
		featured: boolean('featured').notNull().default(false),
		viewCount: integer('view_count').notNull().default(0),
		createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
		updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow()
	},
	(t) => [index('posts_slug_idx').on(t.slug), index('posts_status_published_idx').on(t.status, t.publishedAt)]
);

export const projects = pgTable(
	'projects',
	{
		id: uuid('id').primaryKey().defaultRandom(),
		slug: text('slug').notNull().unique(),
		title: text('title').notNull(),
		excerpt: text('excerpt'),
		contentJson: jsonb('content_json').notNull().$type<Record<string, unknown>>(),
		contentHtml: text('content_html').notNull(),
		contentMarkdown: text('content_markdown'),
		coverImageUrl: text('cover_image_url'),
		coverImageAlt: text('cover_image_alt'),
		status: entryStatusEnum('status').notNull().default('draft'),
		publishedAt: timestamp('published_at', { withTimezone: true }),
		scheduledAt: timestamp('scheduled_at', { withTimezone: true }),
		authorId: text('author_id'),
		repoUrl: text('repo_url'),
		demoUrl: text('demo_url'),
		techStack: text('tech_stack').array(),
		readingTime: integer('reading_time'),
		wordCount: integer('word_count'),
		seoTitle: text('seo_title'),
		seoDescription: text('seo_description'),
		seoKeywords: text('seo_keywords').array(),
		canonicalUrl: text('canonical_url'),
		ogImageUrl: text('og_image_url'),
		noindex: boolean('noindex').notNull().default(false),
		featured: boolean('featured').notNull().default(false),
		viewCount: integer('view_count').notNull().default(0),
		createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
		updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow()
	},
	(t) => [index('projects_slug_idx').on(t.slug), index('projects_status_published_idx').on(t.status, t.publishedAt)]
);

export const categories = pgTable('categories', {
	id: uuid('id').primaryKey().defaultRandom(),
	slug: text('slug').notNull().unique(),
	name: text('name').notNull(),
	description: text('description'),
	createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow()
});

export const tags = pgTable('tags', {
	id: uuid('id').primaryKey().defaultRandom(),
	slug: text('slug').notNull().unique(),
	name: text('name').notNull(),
	createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow()
});

export const postsToCategories = pgTable(
	'posts_to_categories',
	{
		postId: uuid('post_id')
			.notNull()
			.references(() => posts.id, { onDelete: 'cascade' }),
		categoryId: uuid('category_id')
			.notNull()
			.references(() => categories.id, { onDelete: 'cascade' })
	},
	(t) => [primaryKey({ columns: [t.postId, t.categoryId] })]
);

export const postsToTags = pgTable(
	'posts_to_tags',
	{
		postId: uuid('post_id')
			.notNull()
			.references(() => posts.id, { onDelete: 'cascade' }),
		tagId: uuid('tag_id')
			.notNull()
			.references(() => tags.id, { onDelete: 'cascade' })
	},
	(t) => [primaryKey({ columns: [t.postId, t.tagId] })]
);

export const projectsToCategories = pgTable(
	'projects_to_categories',
	{
		projectId: uuid('project_id')
			.notNull()
			.references(() => projects.id, { onDelete: 'cascade' }),
		categoryId: uuid('category_id')
			.notNull()
			.references(() => categories.id, { onDelete: 'cascade' })
	},
	(t) => [primaryKey({ columns: [t.projectId, t.categoryId] })]
);

export const projectsToTags = pgTable(
	'projects_to_tags',
	{
		projectId: uuid('project_id')
			.notNull()
			.references(() => projects.id, { onDelete: 'cascade' }),
		tagId: uuid('tag_id')
			.notNull()
			.references(() => tags.id, { onDelete: 'cascade' })
	},
	(t) => [primaryKey({ columns: [t.projectId, t.tagId] })]
);

export const media = pgTable('media', {
	id: uuid('id').primaryKey().defaultRandom(),
	key: text('key').notNull(),
	url: text('url').notNull(),
	alt: text('alt'),
	width: integer('width'),
	height: integer('height'),
	bytes: integer('bytes'),
	mime: text('mime'),
	postId: uuid('post_id').references(() => posts.id, { onDelete: 'set null' }),
	projectId: uuid('project_id').references(() => projects.id, { onDelete: 'set null' }),
	uploadedBy: text('uploaded_by'),
	createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow()
});

// Auth profile mirror (Neon Auth subject -> role). Email not hardcoded in git; set CMS_ADMIN_EMAIL env.
export const profiles = pgTable('profiles', {
	id: text('id').primaryKey(), // auth subject
	email: text('email').notNull().unique(),
	name: text('name'),
	role: text('role').notNull().default('admin'),
	createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow()
});
