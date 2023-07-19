/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		'./pages/index.vue',
		'./components/user/card-roles/*.{js,jsx,ts,tsx,vue}',
		'./components/user/*.{js,jsx,ts,tsx,vue}',
		'./components/*.{js,jsx,ts,tsx,vue}',
		'./assets/css/tailwind.css'
	],
	darkMode: 'class',
	theme: {
		colors: {
			transparent: 'transparent',
			text: '#050505',
			background: '#fafafa',
			primary: '#a993d1',
			secondary: '#e3e0eb',
			accent: '#5f2dd2',
			dtext: '#fafafa',
			dbackground: '#0c0c0c',
			dprimary: '#a993d1',
			dsecondary: '#3c2c62',
			daccent: '#9f81e4'
		}
	}
};
