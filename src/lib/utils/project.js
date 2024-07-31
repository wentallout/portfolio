export const fetchMarkdownProjects = async () => {
	const allProjectFiles = import.meta.glob('/src/routes/project/*.svx');

	const iterableProjectFiles = Object.entries(allProjectFiles);

	return await Promise.all(
		iterableProjectFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const projectPath = path.slice(11, -4);

			return {
				meta: metadata,
				path: projectPath
			};
		})
	);
};

export const getProjectSlugs = async () => {
	const allProjects = await fetchMarkdownProjects();

	return allProjects.map((project) => project.path.replace(/^\/project\//, ''));
};
