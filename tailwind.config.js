/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                "primary-orange": "#FEA013",
                "primary-dark-orange": "#BA4A0C",
                "primary-red": "#D23131",
                "neutral-base": "#2D2D2D",
                "neutral-dark": "#222222",
                "headings-light": "#F8F8F8",
                "headings-normal": "#CBCBCB",
                "headings-muted": "#999999",
                "headings-disabled": "#707070",
                "borders-default": "#494949",
                "bg-gradient-dark": "#131313",
                "bg-pitch-black": "#111111",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};
