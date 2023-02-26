/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary':'#0d0f18',
				'secondary': '#3b425a',
				'neutral': '#c0c0c0',
				'accent':'#c0c0c0',
				'highlight':'#fa2785'
			},
			fontFamily: {
				'jetbrains': ['JetBrains Mono']
			}
		},
	},
	plugins: [],
}
