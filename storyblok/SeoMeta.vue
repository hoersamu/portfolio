<template></template>

<script setup>
const props = defineProps({ blok: Object });

const meta = [
	{ name: "charSet", content: "utf-8" },
	{ name: "description", content: props.blok.description },
	{ name: "author", content: props.blok.author },
	{ name: "og:title", content: props.blok.title },
	{ name: "og:description", content: props.blok.description },
	{ name: "og:type", content: "website" },
	{ name: "og:url", content: "https://hoera.dev" },
	{ name: "og:image", content: props.blok.image.filename },
	{ name: "twitter:card", content: "summary" },
	{ name: "twitter:title", content: props.blok.title },
	{ name: "twitter:description", content: props.blok.description },
	{ name: "twitter:creator", content: props.blok.author },
	{ name: "twitter:image", content: props.blok.image.filename },
];

if (props.blok.keywords) {
	meta.push({ name: "keywords", content: props.blok.keywords });
}

useHead({
	title: props.blok.title,
	meta,
});
</script>
