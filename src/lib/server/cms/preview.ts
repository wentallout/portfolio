import crypto from 'node:crypto';

export function signPreview(id: string, secret: string) {
	return crypto.createHmac('sha256', secret).update(id).digest('hex').slice(0, 32);
}
export function verifyPreview(id: string, token: string, secret: string) {
	if (!secret) return false;
	const expected = signPreview(id, secret);
	return crypto.timingSafeEqual(Buffer.from(token), Buffer.from(expected));
}
