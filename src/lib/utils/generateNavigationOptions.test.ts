import { describe, expect, it } from 'vitest';
import { generateNavigationOptions } from './generateNavigationOptions.js';

describe('generateNavigationOptions', () => {
	describe('Unlimited mode', () => {
		it('lists every page when the total fits the limit threshold', () => {
			const options = generateNavigationOptions({ currentPage: 1, limit: 2, pageSize: 10, totalItems: 30 });

			expect(options).toEqual([
				{ type: 'number', value: 1 },
				{ type: 'number', value: 2 },
				{ type: 'number', value: 3 }
			]);
		});

		it('rounds a partial trailing page up', () => {
			const options = generateNavigationOptions({ currentPage: 1, pageSize: 10, totalItems: 21 });

			expect(options).toHaveLength(3);
		});

		it('returns an empty list when there is nothing to page through', () => {
			expect(generateNavigationOptions({ currentPage: 1, pageSize: 10, totalItems: 0 })).toEqual([]);
		});
	});

	describe('Limited mode', () => {
		it('adds step controls when requested', () => {
			const options = generateNavigationOptions({
				currentPage: 2,
				limit: 1,
				pageSize: 10,
				showStepOptions: true,
				totalItems: 100
			});

			expect(options[0]).toMatchObject({ type: 'symbol', value: 1 });
			expect(options.at(-1)).toMatchObject({ type: 'symbol', value: 3 });
		});

		it('clamps the previous step at the first page', () => {
			const options = generateNavigationOptions({
				currentPage: 1,
				limit: 1,
				pageSize: 10,
				showStepOptions: true,
				totalItems: 100
			});

			expect(options[0]).toMatchObject({ type: 'symbol', value: 1 });
		});

		it('clamps the next step at the last page', () => {
			const options = generateNavigationOptions({
				currentPage: 10,
				limit: 1,
				pageSize: 10,
				showStepOptions: true,
				totalItems: 100
			});

			expect(options.at(-1)).toMatchObject({ type: 'symbol', value: 10 });
		});

		it('marks the very first and very last page as numbers', () => {
			const options = generateNavigationOptions({ currentPage: 1, limit: 1, pageSize: 10, totalItems: 200 });

			expect(options[0]).toMatchObject({ type: 'number', value: 1 });
			expect(options.at(-1)).toMatchObject({ type: 'number', value: 20 });
		});
	});

	describe('Edge Cases', () => {
		it('handles a single page', () => {
			expect(generateNavigationOptions({ currentPage: 1, pageSize: 42, totalItems: 5 })).toEqual([
				{ type: 'number', value: 1 }
			]);
		});
	});
});
