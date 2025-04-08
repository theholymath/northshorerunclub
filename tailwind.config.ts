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
                // Simplified color palette with just cyan and pink as main colors
                neon: {
                    pink: {
                        DEFAULT: '#ff00ff', // Main pink
                        accessible: '#d600d6', // Accessible version
                    },
                    cyan: {
                        DEFAULT: '#00ffff', // Main cyan
                        accessible: '#00b3b3', // Accessible version
                    },
                    // Red removed as we're limiting to 2 main neon colors
                    black: '#000000',
                    'deep-black': '#050505',
                    white: '#ffffff',
                    // Adding a neutral shade for non-emphasized elements
                    neutral: {
                        DEFAULT: '#aaaaaa',
                        dim: '#666666',
                    },
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
            // Standardized box shadows - reduced intensity for less visual noise
            boxShadow: {
                'neon-pink': '0 0 8px #ff00ff, 0 0 16px #ff00ff',
                'neon-cyan': '0 0 8px #00ffff, 0 0 16px #00ffff',
                'neon-white': '0 0 8px #ffffff, 0 0 16px #ffffff',
                'neon-pink-sm': '0 0 4px #ff00ff, 0 0 8px #ff00ff',
                'neon-cyan-sm': '0 0 4px #00ffff, 0 0 8px #00ffff',
                'neon-inset-pink': 'inset 0 0 5px #ff00ff, inset 0 0 10px #ff00ff',
                'neon-inset-cyan': 'inset 0 0 5px #00ffff, inset 0 0 10px #00ffff',
            },
            // Standardized text shadows - reduced intensity
            textShadow: {
                'neon-pink': '0 0 4px #ff00ff, 0 0 8px #ff00ff',
                'neon-cyan': '0 0 4px #00ffff, 0 0 8px #00ffff',
                // Removed red text shadow as we're limiting to 2 main colors
                'neon-dual': '1px 1px #00ffff, -1px -1px #ff00ff',
            },
            animation: {
                // Slowed down the animation for less distraction
                'neon-pulse': 'neon-pulse 2.5s ease-in-out infinite alternate',
                'flicker': 'flicker 8s linear infinite',
            },
            keyframes: {
                'neon-pulse': {
                    '0%': { opacity: '0.85' },
                    '100%': { opacity: '1' },
                },
                'flicker': {
                    '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
                    '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.85' },
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
                    textShadow: '0 0 4px #ff00ff, 0 0 8px #ff00ff',
                },
                '.text-shadow-neon-cyan': {
                    textShadow: '0 0 4px #00ffff, 0 0 8px #00ffff',
                },
                // Removed red text shadow utility
                '.text-shadow-neon-dual': {
                    textShadow: '1px 1px #00ffff, -1px -1px #ff00ff',
                },
                '.text-glow-pink': {
                    filter: 'drop-shadow(0 0 4px rgba(255, 0, 255, 0.7))',
                },
                '.text-glow-cyan': {
                    filter: 'drop-shadow(0 0 4px rgba(0, 255, 255, 0.7))',
                },
            };
            addUtilities(newUtilities);
        },
    ],
};

export default config; 