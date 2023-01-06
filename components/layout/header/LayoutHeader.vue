<template>
	<header class="relative z-50 px-4 lg:px-20 py-8 backdrop-blur-md w-full">
		<div class="flex justify-between items-center">
			<LayoutHeaderLogo :blok="blok.logo[0]" />
			<nav class="hidden md:block">
				<ul class="flex gap-8 text-lg">
					<LayoutHeaderNavigationItem
						v-for="link in blok.links"
						:key="link._uid"
						:blok="link"
					/>
				</ul>
			</nav>
			<button
				class="absolute z-50 top-8 right-4 md:hidden"
				aria-label="Menu"
				@click="onBurgerClick"
			>
				<LayoutHeaderBurgerIcon :is-open="open" />
			</button>
			<div className="hidden md:block"></div>
		</div>
	</header>
	<LayoutHeaderMobileMenu v-if="open" :blok="blok" />
</template>

<script setup>
defineProps({ blok: Object });

const open = ref(false);

const onBurgerClick = () => {
	open.value = !open.value;
};

onMounted(useHeadroom);
</script>
