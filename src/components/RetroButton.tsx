'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface RetroButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    color?: 'pink' | 'cyan';
    className?: string;
    href?: string;
    type?: 'button' | 'submit' | 'reset';
}

export function RetroButton({
    children,
    onClick,
    color = 'pink',
    className = '',
    href,
    type = 'button',
}: RetroButtonProps) {
    const colorStyles = {
        pink: 'bg-neon-pink hover:bg-neon-pink-accessible text-black hover:text-white border-neon-pink',
        cyan: 'bg-neon-cyan hover:bg-neon-cyan-accessible text-black hover:text-white border-neon-cyan',
    };

    const baseStyles = `
    py-3 px-6 font-mono font-bold uppercase
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-opacity-50
    rounded cursor-pointer text-center
    border-2 shadow-md
  `;

    const buttonStyles = `${baseStyles} ${colorStyles[color]} ${className}`;

    if (href) {
        return (
            <motion.a
                href={href}
                className={buttonStyles}
                whileTap={{ scale: 0.98 }}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <motion.button
            type={type}
            onClick={onClick}
            className={buttonStyles}
            whileTap={{ scale: 0.98 }}
        >
            {children}
        </motion.button>
    );
} 