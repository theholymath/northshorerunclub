'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

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
        pink: 'bg-neon-pink hover:bg-neon-pink-accessible text-white hover:text-neon-cyan border-neon-pink',
        cyan: 'bg-neon-cyan hover:bg-neon-cyan-accessible text-black hover:text-neon-pink border-neon-cyan',
    };

    const baseStyles = `
    py-3 px-6 font-mono font-bold uppercase
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-opacity-50
    rounded cursor-pointer text-center
    border-2 shadow-lg
  `;

    const buttonStyles = `${baseStyles} ${colorStyles[color]} ${className}`;

    const glowAnimation: Variants = {
        glow: {
            boxShadow: color === 'pink'
                ? '0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff00ff'
                : '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff',
            transition: {
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'reverse'
            }
        }
    };

    if (href) {
        return (
            <motion.a
                href={href}
                className={buttonStyles}
                whileHover="glow"
                variants={glowAnimation}
                whileTap={{ scale: 0.95 }}
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
            whileHover="glow"
            variants={glowAnimation}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    );
} 