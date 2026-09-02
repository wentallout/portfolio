// Cloudinary helper for portfolio - replaces Neon storage (not available yet)
// Docs: https://cloudinary.com/documentation/node_integration
// Env: CLOUDINARY_URL=cloudinary://<api_key>:<api_secret>@<cloud_name> (recommended)
// OR  CLOUDINARY_CLOUD_NAME + CLOUDINARY_API_KEY + CLOUDINARY_API_SECRET

import { v2 as cloudinary } from 'cloudinary';
// use process.env at runtime (CLOUDINARY_URL is set on server); dynamic import keeps it server-only
let configured = false;

export function ensureCloudinary() {
	if (configured) return cloudinary;
	// cloudinary.config() auto-reads CLOUDINARY_URL if set; we also support split vars
	const url = process.env.CLOUDINARY_URL;
	const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
	const apiKey = process.env.CLOUDINARY_API_KEY;
	const apiSecret = process.env.CLOUDINARY_API_SECRET;

	if (url) {
		// sdk reads CLOUDINARY_URL automatically via process.env, but be explicit
		cloudinary.config({ secure: true });
	} else if (cloudName && apiKey && apiSecret) {
		cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret, secure: true });
	} else if (!process.env.CLOUDINARY_URL) {
		console.warn('[cloudinary] Missing CLOUDINARY_URL or CLOUDINARY_CLOUD_NAME/API_KEY/API_SECRET - uploads will fail');
	}
	configured = true;
	return cloudinary;
}

export function cloudinaryUrl(publicId: string, opts: Record<string, unknown> = {}) {
	ensureCloudinary();
	// sensible defaults: auto format + quality, secure URL
	return cloudinary.url(publicId, { secure: true, fetch_format: 'auto', quality: 'auto', ...opts });
}

// Upload a local file path to Cloudinary. Returns { public_id, secure_url }.
// Folder convention: portfolio/projects/<slug> or portfolio/blogs/<slug>
export async function uploadToCloudinary(
	localPath: string,
	opts: { publicId?: string; folder?: string } = {}
) {
	ensureCloudinary();
	const result = await cloudinary.uploader.upload(localPath, {
		folder: opts.folder,
		public_id: opts.publicId,
		overwrite: true,
		resource_type: 'auto'
	});
	return result as { public_id: string; secure_url: string; width: number; height: number; bytes: number; format: string };
}

export const cloudinaryConfigured = () => {
	return !!(process.env.CLOUDINARY_URL || (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET));
};
