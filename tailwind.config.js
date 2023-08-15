/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                visible: {
                    "0%": { opacity: "0", visibility: "visible" },
                    "100%": { opacity: "1" },
                },
                invisible: {
                    "0%": { opacity: "1" },
                    "100%": { opacity: "0", visibility: "hidden" },
                },
            },

            // fontSize: {
            //     hero: "min(7vw, 3.5rem)",
            // },

            // gap: {
            //     hero: "min(1vh, 15px)",
            // },

            animation: {
                visible: "visible 0.25s ease-in forwards",
                invisible: "invisible 0.25s ease-out forwards",
            },
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
            "light",
            "dark",
            {
                waifudex: {
                    primary: "#ffffff",
                    secondary: "#888888",
                    accent: "#9ec5ff",
                    neutral: "#2a323c",
                    "base-100": "#131313",
                    info: "#93c5fd",
                    success: "#36d399",
                    warning: "#fcd34d",
                    error: "#ef4444",
                },
            },
        ],
    },
};
