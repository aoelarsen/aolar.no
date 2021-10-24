const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,ts,tsx,vue}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Rubik', ...defaultTheme.fontFamily.sans],
            serif: ['Lora', ...defaultTheme.fontFamily.serif],
            mono: [...defaultTheme.fontFamily.mono],
        },
        extend: {
            colors: {
                primary: '#1D212E',
                secondary: '#F9F7F5',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
