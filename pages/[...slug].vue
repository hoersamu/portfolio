<template>
	<StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const { slug } = useRoute().params;

const story = await useAsyncStoryblok(slug ? slug.join("/") : "home", {
	version: useStoryblokVersion(),
});
</script>
