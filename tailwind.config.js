module.exports = {
	content: ["./templates/*.html"],
	theme: {
		extend: {
			animation: {
				"pulsate-fwd": "pulsate-fwd 0.5s ease  infinite both",
				"fade-in-bl": "fade-in-bl 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
				"fade-in-br": "fade-in-br 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
			},
			keyframes: {
				"pulsate-fwd": {
					"0%,to": {
						transform: "scale(1)",
					},
					"50%": {
						transform: "scale(1.1)",
					},
				},
				"fade-in-bl": {
					"0%": {
						transform: "translateX(-50px) translateY(50px)",
						opacity: "0",
					},
					to: {
						transform: "translateX(0) translateY(0)",
						opacity: "1",
					},
				},
				"fade-in-br": {
					"0%": {
						transform: "translateX(50px) translateY(50px)",
						opacity: "0",
					},
					to: {
						transform: "translateX(0) translateY(0)",
						opacity: "1",
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};