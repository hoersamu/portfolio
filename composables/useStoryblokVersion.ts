export const useStoryblokVersion = () => {
	const publicRuntimeConfig = useRuntimeConfig();
	return publicRuntimeConfig.public.storyblokDraft ? "draft" : "published";
};
