/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
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
			daccent: '#9f81e4',
			pastelgreen: '#12D900',
			pastelred: '#F70D1A',
			pastelyellow: '#FFEE62',
			pastelblue: '#900C3F',
			pastelpurple: '#581845',
			pastelorange: '#FF5733',
			pastelgray: '#FF5733',
			azul600: '#2563EB',
			azul500: '#3B82F6',
			gray: colors.gray,
			white: colors.white
		}
	}
};
