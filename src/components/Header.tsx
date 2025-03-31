'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
    title: string;
}

export function Header({ title }: HeaderProps) {
    return (
        <header className="py-6 mb-8">
            <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-center text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.span
                    className="text-neon-pink text-shadow-neon-dual inline-block"
                    animate={{
                        textShadow: [
                            '0 0 5px #00ffff, 0 0 10px #00ffff, 1px 1px #00ffff',
                            '0 0 5px #ff00ff, 0 0 10px #ff00ff, -1px -1px #ff00ff',
                            '0 0 5px #00ffff, 0 0 10px #00ffff, 1px 1px #00ffff'
                        ]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                >
                    {title}
                </motion.span>
            </motion.h1>
        </header>
    );
} 