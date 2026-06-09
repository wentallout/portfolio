import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	return json({
		mcp_version: '1.0.0',
		capabilities: {
			tools: true,
			resources: true
		}
	});
};

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();
	const { method, params, id } = body;

	if (method === 'listTools') {
		return json({
			jsonrpc: '2.0',
			id,
			result: {
				tools: [
					{
						name: 'get_portfolio_info',
						description: 'Get information about the portfolio projects and skills',
						inputSchema: {
							type: 'object',
							properties: {}
						}
					}
				]
			}
		});
	}

	if (method === 'callTool') {
		if (params.name === 'get_portfolio_info') {
			return json({
				jsonrpc: '2.0',
				id,
				result: {
					content: [
						{
							type: 'text',
							text: 'This is the portfolio of Khoa. Check /projects for work and /about for skills.'
						}
					]
				}
			});
		}
	}

	return json({
		jsonrpc: '2.0',
		id,
		error: {
			code: -32601,
			message: 'Method not found'
		}
	}, { status: 404 });
};
