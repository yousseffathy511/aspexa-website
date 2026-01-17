/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'laptop': '1280px',  // Custom: typical laptop (1280-1439px)
            'xl': '1440px',      // Large desktop
            '2xl': '1536px',
        },
        extend: {
            colors: {
                'aspexa-red': '#EC0000',
                'aspexa-black': '#050505',
                'aspexa-dark': '#0A0A0A',
                'aspexa-light': '#F8F8F8',
            },
            fontFamily: {
                sans: ['Rajdhani', 'sans-serif'],
                mono: ['Space Mono', 'monospace'],
            },
            animation: {
                'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'glitch': 'glitch 1s linear infinite',
                'scanline': 'scanline 8s linear infinite',
            },
            keyframes: {
                scanline: {
                    '0%': { transform: 'translateY(-100%)' },
                    '100%': { transform: 'translateY(100%)' }
                }
            }
        }
    },
    plugins: [],
}
