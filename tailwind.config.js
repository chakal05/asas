module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					sm: '2rem',
					md: '3rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem',
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
				secondary:'#F07046'
			},
		},
	},
	plugins: [require('tailwindcss'), require('autoprefixer')],
};
