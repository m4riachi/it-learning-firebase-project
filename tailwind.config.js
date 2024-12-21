const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: [
        './pages/**/*.{vue,html,js}',
        './modules/**/*.{vue,html,js}',
        './components/**/*.{vue,html,js}',
        './formkit.config.ts',
        './formkit.theme.ts',
        './*.{vue,html,js}',
    ],
    plugins: [
        // ...
        require('@tailwindcss/forms'),
    ],
    safelist: ['col-span-8', 'col-span-5'],
};
