<template>
	<footer
		class="grid grid-cols-2 md:grid-cols-3 justify-between mt-4 md:mt-20 px-4 md:px-20 py-4 md:py-8"
	>
		<span>
			<span class="whitespace-nowrap">
				&copy; {{ new Date().getFullYear() }} {{ blok.name }}
			</span>
			<strong class="hidden md:inline"> · </strong>
			<NuxtLink
				:to="blok.impressum_link.cached_url"
				class="hover:text-[#50b0ae]"
			>
				{{ blok.impressum_link.story.name }}
			</NuxtLink>
		</span>
		<div
			class="items-center uppercase text-xs font-bold tracking-widest hidden md:inline-flex justify-center"
		>
			{{ blok.made_with[0].title }}
			<ul class="space-x-2 inline-flex items-center -mt-1 ml-3">
				<li
					v-for="technology in blok.made_with[0].technologies"
					:key="technology._uid"
					class="h-5 w-6"
				>
					<StoryblokComponent :blok="technology" />
				</li>
			</ul>
		</div>
		<ul class="flex gap-6 justify-end">
			<li
				v-for="social in blok.social_links"
				:key="social._uid"
				class="h-6 w-6"
			>
				<StoryblokComponent :blok="social" />
			</li>
		</ul>
	</footer>
</template>

<script setup>
defineProps({ blok: Object });
</script>
