import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Gabarito'],
            },
            colors: {
                primary: colors.sky,
                gray: colors.zinc,
            }
        },
    },
    plugins: [
        typography,
    ],
}
