<template>
	<section v-editable="blok">
		<h1
			v-if="blok.headline"
			class="headline mt-20 text-3xl md:text-5xl lg:text-6xl"
		>
			{{ blok.headline }}
		</h1>
		<h2 v-if="blok.subheadline" class="font-bold text-xl md:text-2xl mt-2">
			{{ blok.subheadline }}
		</h2>
		<div
			v-if="blok.paragraph"
			v-html="resolvedParagraph"
			class="mt-8 prose dark:prose-dark max-w-none"
		/>
	</section>
</template>

<script setup>
const props = defineProps({ blok: Object });

const resolvedParagraph = computed(() =>
	props.blok.paragraph ? renderRichText(props.blok.paragraph) : ""
);
</script>
