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
					sm: '2rem',
					md: '5rem',
					lg: '7rem',
					xl: '9rem',
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
				secondary:'#F07046'
			},
		},
	},
	plugins: [require('tailwindcss'), require('autoprefixer')],
};
