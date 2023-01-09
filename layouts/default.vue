<template>
	<main class="min-h-screen flex flex-col">
		<LayoutHeader v-if="header" :blok="header" />
		<div class="flex-1 mx-auto w-full md:max-w-5xl" id="content">
			<slot />
		</div>
		<LayoutFooter v-if="footer" :blok="footer" />
	</main>
</template>

<script setup lang="ts">
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories/config", {
	version: useStoryblokVersion(),
	resolve_links: "url",
});

const header = ref(null);
header.value = data.story.content.header[0];
const footer = ref(null);
footer.value = data.story.content.footer[0];
</script>
