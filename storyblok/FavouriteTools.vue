<template>
	<section id="tools" class="my-40">
		<h2 class="headline text-xl md:text-2xl lg:text-3xl mt-24 text-center">
			{{ blok.title }}
		</h2>

		<ul
			class="flex flex-wrap items-center justify-center max-w-5xl mt-8 mx-auto gap-x-16 gap-y-8"
		>
			<li v-for="tool in blok.tools" :key="tool._uid" class="h-8 w-auto">
				<StoryblokComponent :blok="tool" />
			</li>
		</ul>
	</section>
</template>

<script setup>
defineProps({ blok: Object });
</script>
