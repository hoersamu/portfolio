<template>
	<NuxtLink
		to="/"
		class="group relative transition whitespace-nowrap hover:transition duration-300 text-2xl font-bold flex gap-4 items-center"
		draggable="false"
		><img
			:src="blok.picture.filename + '/m/96x0'"
			:alt="blok.picture.alt"
			:title="blok.picture.title"
			class="w-12 h-12 rounded-full"
		/>
		<span class="transition duration-300 opacity-100 group-hover:opacity-0">
			{{ blok.nickname }}
		</span>
		<span
			class="absolute transition duration-300 left-16 opacity-0 group-hover:opacity-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-start to-blue-stop dark:from-purple-start dark:to-purple-stop"
		>
			{{ blok.fullname }}
		</span>
	</NuxtLink>
</template>

<script setup>
defineProps({ blok: Object });
</script>
