<template>
	<div
		class="flex transition-all transform md:hover:scale-[1.01] odd:justify-end"
	>
		<div
			class="w-full md:w-10/12 px-8 py-6 rounded-3xl glass-light dark:glass-dark mb-6 drop-shadow-lg hover:drop-shadow-2xl transition-all"
		>
			<div class="flex gap-4 items-start md:items-center">
				<img
					v-if="blok.company_logo.filename"
					:src="blok.company_logo.filename"
					:alt="blok.company"
					class="w-16 h-16 rounded-md"
				/>
				<svg-icon
					v-else-if="blok.company_logo_svg"
					:name="blok.company_logo_svg"
					class="w-16 h-16"
				/>

				<div class="w-full mb-2">
					<div class="flex flex-col-reverse md:flex-row justify-between">
						<h3 class="font-bold">{{ blok.job_title }}</h3>
						<span class="text-sm md:text-base">
							{{ blok.from_till }}
						</span>
					</div>
					<h4>
						<NuxtLink
							v-if="blok.company_url.url"
							:to="blok.company_url.url"
							:target="blok.company_url.target"
							class="underlined relative"
						>
							{{ blok.company }}
						</NuxtLink>
						<span v-else> {{ blok.company }} </span>
					</h4>

					<Technology
						v-if="blok.technologies"
						:technologies="blok.technologies.split('\n')"
						:title="blok.technology_title"
						class="hidden md:block mt-3"
					/>
				</div>
			</div>
			<Technology
				v-if="blok.technologies"
				:technologies="blok.technologies.split('\n')"
				:title="blok.technology_title"
				class="md:hidden"
			/>
		</div>
	</div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
