import { k as getContext } from './index3.js';
const getStores = () => {
	const stores = getContext('__svelte__');
	return {
		page: {
			subscribe: stores.page.subscribe
		},
		navigating: {
			subscribe: stores.navigating.subscribe
		},
		updated: stores.updated
	};
};
const page = {
	subscribe(fn) {
		const store = getStores().page;
		return store.subscribe(fn);
	}
};
const navigating = {
	subscribe(fn) {
		const store = getStores().navigating;
		return store.subscribe(fn);
	}
};
export { navigating as n, page as p };
