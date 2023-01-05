// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_ACCESS_TOKEN }],
		"@nuxtjs/tailwindcss",
		"@nuxtjs/svg-sprite",
	],
});
