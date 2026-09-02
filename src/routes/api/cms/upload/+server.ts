import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { neon } from '@neondatabase/serverless';
import { DATABASE_URL } from '$app/env/private';
import { ensureCloudinary } from '#lib/server/cloudinary.js';

export const POST: RequestHandler = async ({ request, locals }) => {
	if (!locals.user || locals.user.role !== 'admin') return json({ error: 'Unauthorized' }, { status: 401 });
	const form = await request.formData();
	const file = form.get('file') as File | null;
	if (!file) return json({ error: 'No file' }, { status: 400 });
	if (file.size > 5 * 1024 * 1024) return json({ error: 'File too large (5MB)' }, { status: 400 });
	if (!file.type.startsWith('image/')) return json({ error: 'Only images' }, { status: 400 });

	const key = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.\-_]/g, '_')}`;
	const arrayBuf = await file.arrayBuffer();
	const buf = Buffer.from(arrayBuf);

	// Try Cloudinary upload first (configured via CLOUDINARY_URL)
	const hasCloudinary = !!(process.env.CLOUDINARY_URL || (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY));
	if (hasCloudinary) {
		try {
			const cloudinary = ensureCloudinary();
			const ext = file.name.split('.').pop() || 'webp';
			const publicId = `portfolio/cms/${key.replace(/\.[^.]+$/, '')}`;
			const result = await new Promise<{ secure_url: string; public_id: string; width?: number; height?: number; bytes?: number }>(
				(resolve, reject) => {
					const stream = cloudinary.uploader.upload_stream(
						{
							public_id: publicId,
							resource_type: 'auto',
							overwrite: true,
							quality: 'auto',
							fetch_format: 'auto'
						},
						(error, res) => (error ? reject(error) : resolve(res as never))
					);
					stream.end(buf);
				}
			);
			const url = (result as { secure_url: string }).secure_url;
			try {
				const sql = neon(DATABASE_URL);
				await sql`INSERT INTO media (key, url, alt, width, height, bytes, mime, uploaded_by) VALUES (${key}, ${url}, ${null}, ${result.width ?? null}, ${result.height ?? null}, ${result.bytes ?? file.size}, ${file.type}, ${locals.user.id})`;
			} catch {}
			return json({ url, key, provider: 'cloudinary' });
		} catch (e) {
			console.error('[upload] Cloudinary failed, falling back to data URL', e);
		}
	}

	// Fallback: inline data URL (Neon storage unavailable in ap-southeast-1)
	const dataUrl = `data:${file.type};base64,${buf.toString('base64')}`;
	try {
		const sql = neon(DATABASE_URL);
		await sql`INSERT INTO media (key, url, alt, width, height, bytes, mime, uploaded_by) VALUES (${key}, ${dataUrl}, ${null}, ${null}, ${null}, ${file.size}, ${file.type}, ${locals.user.id})`;
	} catch {}
	return json({ url: dataUrl, key, provider: 'dataUrl' });
};
