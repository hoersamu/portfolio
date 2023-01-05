<template>
	<NuxtLink
		:to="blok.link.cached_url"
		class="hover:text-[#50b0ae]"
		:target="blok.link.target"
	>
		<svg-icon
			:name="blok.icon_name"
			:title="blok.title"
			class="w-full h-full"
		/>
	</NuxtLink>
</template>

<script setup>
defineProps({ blok: Object });
</script>
