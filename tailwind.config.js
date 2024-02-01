/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				cubano: ["Cubano", "sans-serif"],
			},
			colors: {
				brandBackground: "#161A22",
				brandPurple: "#9F4FD9",
				brandPurpleFade: "#9F4FD9da",
				brandIconFade: "#b0b7c3",

				// Project buttons
				projectButtonBorder: "#313640",
				projectButtonBG: "#272b33",
				projectButtonBorderHOVER: "#5c6678",
			},
		},
	},
	// plugins: [require("@tailwindcss/aspect-ratio")],
};
