<template>
	<div
		class="fixed md:hidden z-40 transition-all duration-700 delay-100 ease-in-out bg-gradient-to-b from-grey-200 dark:from-grey-900 to-transparent backdrop-blur-xl w-screen p-4 gap-12 top-0 h-screen"
	>
		<ul
			class="flex flex-col justify-center align-center text-center gap-4 h-full"
		>
			<LayoutHeaderNavigationItem
				v-for="link in blok.links"
				:key="link._uid"
				:blok="link"
			/>
			<li class="flex justify-center mt-12">
				<LayoutHeaderThemeToggle />
			</li>
		</ul>
	</div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
