const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	mode: 'jit',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			xs: '425px',
			...defaultTheme.screens,
		},
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: '0',
					sm: '0',
					md: '3rem',
					lg: '3rem',
					xl: '7rem',
					'2xl': '17rem',
				},
			},
			fontFamily: {
				sans: ['roboto'],
				serif: ['roboto'],
				mono: ['roboto'],
				display: ['roboto'],
				body: ['"roboto"'],
			},

		},
	},
	plugins: [require('tailwindcss'), require('autoprefixer')],
};
