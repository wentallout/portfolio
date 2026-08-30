export type ProjectMeta = {
	title?: string;
	date?: string;
	[key: string]: unknown;
};

export type ProjectEntry = {
	meta: ProjectMeta;
	path: string;
};

const fetchMarkdownProjects = async (): Promise<ProjectEntry[]> => {
	const allProjectFiles = import.meta.glob<{ metadata: ProjectMeta }>('/src/routes/projects/*.svx');
	const iterableProjectFiles = Object.entries(allProjectFiles);
	return await Promise.all(
		iterableProjectFiles.map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as { metadata: ProjectMeta };
			const projectPath = path.slice(11, -4);
			return {
				meta: metadata,
				path: projectPath
			};
		})
	);
};

export const getProjectSlugs = async (): Promise<string[] | undefined> => {
	const allProjects = await fetchMarkdownProjects();
	if (allProjects.length > 0) {
		return allProjects.map((project) => project.path.replace(/^\/projects\//, ''));
	}
	return undefined;
};
