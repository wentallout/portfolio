export let SymbolType;
(function (SymbolType) {
	SymbolType['PREVIOUS_PAGE'] = 'PREVIOUS_PAGE';
	SymbolType['NEXT_PAGE'] = 'NEXT_PAGE';
	SymbolType['ELLIPSIS'] = 'ELLIPSIS';
})(SymbolType || (SymbolType = {}));

export const paginate = ({ currentPage, items, pageSize }) => {
	return items.slice((currentPage - 1) * pageSize, (currentPage - 1) * pageSize + pageSize);
};

export function generateNavigationOptions({
	currentPage,
	limit,
	pageSize,
	showStepOptions = false,
	totalItems
}) {
	const totalPages = Math.ceil(totalItems / pageSize);
	const limited = limit && totalPages > getLimitThreshold(limit);
	const options = limited
		? generateLimitedOptions({ currentPage, limit, totalPages })
		: generateUnlimitedOptions({ totalPages });
	return showStepOptions ? addStepOptions({ currentPage, options, totalPages }) : options;
}
function addStepOptions({ currentPage, options, totalPages }) {
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
function generateLimitedOptions({ currentPage, limit, totalPages }) {
	const boundarySize = limit * 2 + 2;
	const firstBoundary = 1 + boundarySize;
	const lastBoundary = totalPages - boundarySize;
	const totalShownPages = firstBoundary + 2;
	if (currentPage <= firstBoundary - limit) {
		return Array(totalShownPages)
			.fill(null)
			.map((_, index) => {
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
			.map((_, index) => {
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
			.map((_, index) => {
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
function generateUnlimitedOptions({ totalPages }) {
	return new Array(totalPages).fill(null).map((_, index) => ({
		type: 'number',
		value: index + 1
	}));
}
function getLimitThreshold(limit) {
	const maximumUnlimitedPages = 3; // This means we cannot limit 3 pages or less
	const numberOfBoundaryPages = 2; // The first and last pages are always shown
	return limit * 2 + maximumUnlimitedPages + numberOfBoundaryPages;
}
