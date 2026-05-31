/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['var(--font-open-sans)', 'sans-serif'],
            display: ['var(--font-rubik)', 'sans-serif'],
            serif: ['var(--font-merriweather)', 'Georgia', 'serif'],
          },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
        },
        animation: {
          marquee: 'marquee 40s linear infinite',
        },
    }
  },
  plugins: [require("tailwindcss-animate")],
};
