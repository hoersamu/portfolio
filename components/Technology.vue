<template>
	<p class="text-sm flex flex-wrap items-center">
		<strong class="mr-2">{{ title }}</strong>
		<Chip
			v-for="technology in technologies"
			:key="technology"
			:class="technology === activeTechnology && 'headline'"
			@mouseEnter="setActiveTechnology(technology)"
			@mouseLeave="setActiveTechnology(null)"
		>
			{{ technology }}
		</Chip>
	</p>
</template>

<script setup>
const props = defineProps({
	technologies: Array,
	title: String,
});

const { activeTechnology, setActiveTechnology } = useTechnologySync();
</script>
