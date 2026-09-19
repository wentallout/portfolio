import { form } from '$app/server';
import { getDb } from '#lib/server/db/client.js';
import { contactMessages } from '#lib/server/db/schema.js';
import * as z from 'zod';

export const submitContactMessage = form(
	z.object({
		name: z.string().trim().min(1, 'Name is required').max(100, 'Name is too long'),
		email: z.string().trim().min(1, 'Email is required').email('Enter a valid email').max(200, 'Email is too long'),
		message: z
			.string()
			.trim()
			.min(1, 'Message is required')
			.max(5000, 'Message is too long')
	}),
	async (data) => {
		await getDb().insert(contactMessages).values(data);
		return { success: true };
	}
);
