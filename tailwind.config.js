module.exports = {
	mode: 'jit',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		
	],
	theme: {
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
			colors: {
				primary: 'rgb(6, 6, 61)',
				secondary: '#F07046',
			},
		},
	},
	plugins: [require('tailwindcss'), require('autoprefixer')],
};
