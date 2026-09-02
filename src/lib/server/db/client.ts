import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { DATABASE_URL } from '$app/env/private';
import * as schema from './schema.js';

neonConfig.fetchEndpoint = (host) => {
	return `https://${host}`;
};

function getDbUrl() {
	const url = DATABASE_URL;
	if (!url) throw new Error('DATABASE_URL missing');
	return url;
}

let _db: ReturnType<typeof drizzle<typeof schema>> | null = null;

export function getDb() {
	if (_db) return _db;
	const sql = neon(getDbUrl());
	_db = drizzle(sql, { schema });
	return _db;
}

export type Db = ReturnType<typeof getDb>;
