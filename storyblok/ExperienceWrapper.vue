<template>
	<div>
		<h2 class="headline mt-12 mb-4 text-4xl leading-tight">{{ blok.title }}</h2>
		<StoryblokComponent
			v-for="experience in blok.experiences"
			:key="experience._uid"
			:blok="experience"
		/>
	</div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
