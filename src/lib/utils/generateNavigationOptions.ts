const SymbolType = {
	ELLIPSIS: 'ELLIPSIS',
	NEXT_PAGE: 'NEXT_PAGE',
	PREVIOUS_PAGE: 'PREVIOUS_PAGE'
} as const;

export type SymbolTypeValue = (typeof SymbolType)[keyof typeof SymbolType];

export type NavigationOption = {
	type: 'number' | 'symbol';
	value: number;
	symbol?: SymbolTypeValue;
};

export function generateNavigationOptions({
	currentPage,
	limit,
	pageSize,
	showStepOptions = false,
	totalItems
}: {
	currentPage: number;
	limit?: number;
	pageSize: number;
	showStepOptions?: boolean;
	totalItems: number;
}): NavigationOption[] {
	const totalPages = Math.ceil(totalItems / pageSize);
	const limited = limit && totalPages > getLimitThreshold(limit);
	const options: NavigationOption[] = limited
		? generateLimitedOptions({ currentPage, limit: limit!, totalPages })
		: generateUnlimitedOptions({ totalPages });
	return showStepOptions ? addStepOptions({ currentPage, options, totalPages }) : options;
}
function addStepOptions({
	currentPage,
	options,
	totalPages
}: {
	currentPage: number;
	options: NavigationOption[];
	totalPages: number;
}): NavigationOption[] {
	return [
		{
			symbol: SymbolType.PREVIOUS_PAGE,
			type: 'symbol',
			value: currentPage <= 1 ? 1 : currentPage - 1
		},
		...(options || []),
		{
			symbol: SymbolType.NEXT_PAGE,
			type: 'symbol',
			value: currentPage >= totalPages ? totalPages : currentPage + 1
		}
	];
}
function generateLimitedOptions({
	currentPage,
	limit,
	totalPages
}: {
	currentPage: number;
	limit: number;
	totalPages: number;
}): NavigationOption[] {
	const boundarySize = limit * 2 + 2;
	const firstBoundary = 1 + boundarySize;
	const lastBoundary = totalPages - boundarySize;
	const totalShownPages = firstBoundary + 2;
	if (currentPage <= firstBoundary - limit) {
		return Array(totalShownPages)
			.fill(null)
			.map((_, index): NavigationOption => {
				if (index === totalShownPages - 1) {
					return {
						type: 'number',
						value: totalPages
					};
				} else if (index === totalShownPages - 2) {
					return {
						symbol: SymbolType.ELLIPSIS,
						type: 'symbol',
						value: firstBoundary + 1
					};
				}
				return {
					type: 'number',
					value: index + 1
				};
			});
	} else if (currentPage >= lastBoundary + limit) {
		return Array(totalShownPages)
			.fill(null)
			.map((_, index): NavigationOption => {
				if (index === 0) {
					return {
						type: 'number',
						value: 1
					};
				} else if (index === 1) {
					return {
						symbol: SymbolType.ELLIPSIS,
						type: 'symbol',
						value: lastBoundary - 1
					};
				}
				return {
					type: 'number',
					value: lastBoundary + index - 2
				};
			});
	} else if (currentPage >= firstBoundary - limit && currentPage <= lastBoundary + limit) {
		return Array(totalShownPages)
			.fill(null)
			.map((_, index): NavigationOption => {
				if (index === 0) {
					return {
						type: 'number',
						value: 1
					};
				} else if (index === 1) {
					return {
						symbol: SymbolType.ELLIPSIS,
						type: 'symbol',
						value: currentPage - limit + (index - 2)
					};
				} else if (index === totalShownPages - 1) {
					return {
						type: 'number',
						value: totalPages
					};
				} else if (index === totalShownPages - 2) {
					return {
						symbol: SymbolType.ELLIPSIS,
						type: 'symbol',
						value: currentPage + limit + 1
					};
				}
				return {
					type: 'number',
					value: currentPage - limit + (index - 2)
				};
			});
	}
	return [];
}
function generateUnlimitedOptions({ totalPages }: { totalPages: number }): NavigationOption[] {
	return new Array(totalPages).fill(null).map((_, index) => ({
		type: 'number',
		value: index + 1
	}));
}
function getLimitThreshold(limit: number): number {
	const maximumUnlimitedPages = 3;
	const numberOfBoundaryPages = 2;
	return limit * 2 + maximumUnlimitedPages + numberOfBoundaryPages;
}
