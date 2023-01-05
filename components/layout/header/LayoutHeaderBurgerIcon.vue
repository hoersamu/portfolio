<template>
	<div :class="burgerClasses">
		<span />
		<span />
		<span />
		<span />
	</div>
</template>

<script setup>
const props = defineProps({ isOpen: Boolean });

const burgerClasses = computed(
	() => `burger-icon ${props.isOpen ? "open" : ""}`
);
</script>
