import { writable } from 'svelte/store';

import { supabase } from '$lib/supabase/supabaseClient';

export const resourceData = writable([]);

export const getResource = async () => {
	let { data, error } = await supabase.from('resource').select('*');

	if (error) throw new Error(error.message);

	resourceData.set(data);
};

export const postResource = async (title, type, description, link) => {
	const { data, error } = await supabase
		.from('resource')
		.insert([{ title, type, description, link }]);

	if (error) throw new Error(error.message);

	resourceData.update((cur) => {
		const newResource = [...cur, data[0]];
		return newResource;
	});
};

export const deleteResource = async (id) => {
	const { error } = await supabase.from('resource').delete().match({ id });

	if (error) throw new Error(error.message);

	resourceData.update((resourceData) => resourceData.filter((resource) => resource.id !== id));
};
