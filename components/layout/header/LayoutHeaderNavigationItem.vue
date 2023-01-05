<template>
	<li>
		<NuxtLink
			:to="blok.link.cached_url"
			class="md:underlined transition relative block whitespace-nowrap text-2xl md:text-lg"
		>
			{{ blok.link.story.name }}
		</NuxtLink>
	</li>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style scoped>
a.router-link-active {
	@apply font-bold text-off-black dark:text-off-white;
}
a:not(.router-link-active) {
	@apply font-medium text-grey-700 md:text-grey-500 hover:text-off-black dark:hover:text-off-white;
}
</style>
