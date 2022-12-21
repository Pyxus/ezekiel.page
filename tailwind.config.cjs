/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'primary':'#191919'
		},
		extend: {},
	},
	daisyui: {
		themes: ["dracula"]
	},
	plugins: [require("daisyui")],
}
