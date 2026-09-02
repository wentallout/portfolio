
import type { PageServerLoad } from './$types';
import { DATABASE_URL } from '$app/env/private';

export const load: PageServerLoad = async () => {
	try {
		const { neon } = await import('@neondatabase/serverless');
		const sql = neon(DATABASE_URL);
		const p = await sql`SELECT count(*) as c FROM posts`;
		const pr = await sql`SELECT count(*) as c FROM projects`;
		return { counts: { posts: Number(p[0].c), projects: Number(pr[0].c) } };
	} catch {
		return { counts: { posts: 0, projects: 0 } };
	}
};

