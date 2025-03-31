import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Original colors for reference but adjusted for better contrast
                neon: {
                    pink: {
                        DEFAULT: '#ff00ff', // Original magenta
                        accessible: '#d600d6', // Darkened for better contrast
                    },
                    cyan: {
                        DEFAULT: '#00ffff', // Original cyan
                        accessible: '#00b3b3', // Darkened for better contrast
                    },
                    black: '#000000',
                    'deep-black': '#050505',
                    white: '#ffffff',
                },
            },
            fontFamily: {
                mono: ['"Courier New"', 'monospace'],
                retro: ['"Press Start 2P"', 'cursive', 'monospace'],
                modern: ['"Inter"', 'sans-serif'],
            },
            borderWidth: {
                '3': '3px',
            },
            boxShadow: {
                'neon-pink': '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff',
                'neon-cyan': '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff',
                'neon-white': '0 0 10px #ffffff, 0 0 20px #ffffff',
                'neon-pink-sm': '0 0 5px #ff00ff, 0 0 10px #ff00ff',
                'neon-cyan-sm': '0 0 5px #00ffff, 0 0 10px #00ffff',
                'neon-inset-pink': 'inset 0 0 10px #ff00ff, inset 0 0 20px #ff00ff',
                'neon-inset-cyan': 'inset 0 0 10px #00ffff, inset 0 0 20px #00ffff',
            },
            textShadow: {
                'neon-pink': '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff00ff',
                'neon-cyan': '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff',
                'neon-dual': '1px 1px #00ffff, -1px -1px #ff00ff, 0 0 10px #ff00ff, 0 0 10px #00ffff',
            },
            animation: {
                'neon-pulse': 'neon-pulse 1.5s ease-in-out infinite alternate',
                'flicker': 'flicker 6s linear infinite',
            },
            keyframes: {
                'neon-pulse': {
                    '0%': { opacity: '0.8' },
                    '100%': { opacity: '1' },
                },
                'flicker': {
                    '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
                    '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.8' },
                },
            },
            spacing: {
                '128': '32rem',
            },
            maxWidth: {
                '8xl': '88rem',
            },
            backgroundImage: {
                'radial-black': 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 1) 100%)',
            },
        },
    },
    plugins: [
        function ({ addUtilities }: { addUtilities: any }) {
            const newUtilities = {
                '.text-shadow-neon-pink': {
                    textShadow: '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff00ff',
                },
                '.text-shadow-neon-cyan': {
                    textShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff',
                },
                '.text-shadow-neon-dual': {
                    textShadow: '1px 1px #00ffff, -1px -1px #ff00ff, 0 0 10px #ff00ff, 0 0 10px #00ffff',
                },
                '.text-glow-pink': {
                    filter: 'drop-shadow(0 0 5px rgba(255, 0, 255, 0.7))',
                },
                '.text-glow-cyan': {
                    filter: 'drop-shadow(0 0 5px rgba(0, 255, 255, 0.7))',
                },
            };
            addUtilities(newUtilities);
        },
    ],
};

export default config; 