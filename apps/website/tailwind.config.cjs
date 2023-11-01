const defaultColors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./apps/website/src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    ...defaultColors.zinc,
                    main: defaultColors.zinc['900'],
                    light: defaultColors.zinc['600'],
                    dark: defaultColors.black,
                },
                secondary: {
                    ...defaultColors.zinc,
                    main: defaultColors.zinc['50'],
                    light: defaultColors.white,
                    dark: defaultColors.zinc['300'],
                },
                accent: {
                    ...defaultColors.purple,
                    main: defaultColors.purple['700'],
                    light: defaultColors.purple['300'],
                    dark: defaultColors.purple['900'],
                },
                background: {
                    light: defaultColors.zinc['50'],
                    dark: defaultColors.gray['700'],
                },
            },

            container: {
                center: true,
            },

            fontFamily: {
                sans: ['Source Sans 3', 'sans-serif'],
                serif: ['Alegreya', 'serif'],
            },

            gridTemplateColumns: {
                'timeline': '5rem 1.5rem 1fr',
                'timeline-mobile': '2rem 1.5rem 1fr',
            },
        },
    },
    plugins: [require('@tailwindcss/typography'), require('tailwindcss-debug-screens')],
};
