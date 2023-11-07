const defaultColors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './apps/website/src/**/*.{ts,tsx}',
        './packages/ui/src/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    ...defaultColors.zinc,
                    DEFAULT: defaultColors.zinc['900'],
                    main: defaultColors.zinc['900'],
                    light: defaultColors.zinc['600'],
                    dark: defaultColors.black,
                },
                secondary: {
                    ...defaultColors.zinc,
                    DEFAULT: defaultColors.zinc['50'],
                    main: defaultColors.zinc['50'],
                    light: defaultColors.white,
                    dark: defaultColors.zinc['300'],
                },
                accent: {
                    ...defaultColors.purple,
                    DEFAULT: defaultColors.purple['700'],
                    main: defaultColors.purple['700'],
                    light: defaultColors.purple['300'],
                    dark: defaultColors.purple['900'],
                },
                background: {
                    DEFAULT: defaultColors.zinc['50'],
                    light: defaultColors.zinc['50'],
                    dark: defaultColors.zinc['950'],
                },
            },

            container: {
                center: true,
            },

            fontFamily: {
                sans: ['"Source Sans 3 Variable"', 'sans-serif'],
                serif: ['"Alegreya Variable"', 'serif'],
            },

            gridTemplateColumns: {
                'timeline': '5rem 1.5rem 1fr',
                'timeline-mobile': '2rem 1.5rem 1fr',
            },
        },
    },
    plugins: [require('@tailwindcss/typography'), require('tailwindcss-debug-screens')],
};
