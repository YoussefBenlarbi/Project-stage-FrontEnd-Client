/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				// 'login-pic': "url('./src/assets/wallpaper.png')",
				'login-pic': "url('./assets/wallpaper2.png')",
				'login-redPic': "url('./assets/red-pic.png')",
			},
		},
		screens: {
			sm: '640px',
			// => @media (min-width :640px){...}
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
	},
	plugins: [],
};
