<template>
	<div class="my-8 text-lg">
		<span>{{ blok.pre_text }}</span>
		<span ref="typing"></span>
		<span>{{ blok.suf_text }}</span>
	</div>
</template>

<script setup>
import Typed from "typed.js";

const props = defineProps({ blok: Object });

const typing = ref(null);

onMounted(() => {
	new Typed(typing.value, {
		strings: props.blok.typed_options.split("\n"),
		typeSpeed: 80,
		backSpeed: 20,
		smartBackspace: true,
		backDelay: 1000,
		loopCount: 0,
		showCursor: true,
		cursorChar: "|",
		shuffle: true,
		loop: true,
	});
});
</script>
