import sanitizeHtml from 'sanitize-html';

export function sanitizeContentHtml(html: string): string {
	return sanitizeHtml(html, {
		allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h2', 'h3', 'h4', 'figure', 'figcaption']),
		allowedAttributes: {
			...sanitizeHtml.defaults.allowedAttributes,
			a: ['href', 'target', 'rel'],
			img: ['src', 'alt', 'width', 'height', 'loading'],
			figure: ['class'],
			figcaption: ['class'],
			h2: ['id'],
			h3: ['id'],
			h4: ['id'],
			pre: ['class'],
			code: ['class']
		},
		allowedSchemes: ['http', 'https', 'mailto', 'data']
	});
}
