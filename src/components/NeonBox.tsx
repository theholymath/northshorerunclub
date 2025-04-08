'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface NeonBoxProps {
    children: React.ReactNode;
    color?: 'cyan' | 'pink' | 'white';
    className?: string;
    animate?: boolean;
    intensity?: 'low' | 'medium' | 'high';
    flicker?: boolean;
}

export function NeonBox({
    children,
    color = 'cyan',
    className = '',
    animate = false,
    intensity = 'medium',
    flicker = false,
}: NeonBoxProps) {
    const colorMap = {
        cyan: {
            border: 'border-neon-cyan-accessible',
            shadow: intensity === 'low'
                ? 'shadow-neon-cyan-sm'
                : intensity === 'high'
                    ? 'shadow-neon-cyan'
                    : 'shadow-neon-cyan-sm',
            text: 'text-neon-cyan',
            bg: 'bg-black bg-opacity-90',
        },
        pink: {
            border: 'border-neon-pink-accessible',
            shadow: intensity === 'low'
                ? 'shadow-neon-pink-sm'
                : intensity === 'high'
                    ? 'shadow-neon-pink'
                    : 'shadow-neon-pink-sm',
            text: 'text-neon-pink',
            bg: 'bg-black bg-opacity-90',
        },
        white: {
            border: 'border-white',
            shadow: 'shadow-neon-white',
            text: 'text-white',
            bg: 'bg-black bg-opacity-90',
        },
    };

    const { border, shadow, bg } = colorMap[color];

    // Only use flicker animation if specifically requested
    const flickerClass = flicker ? 'animate-flicker' : '';

    const Component = animate ? motion.div : 'div';

    return (
        <Component
            className={`border-2 ${border} ${shadow} ${flickerClass} rounded-lg p-6 my-8 ${bg} ${className}`}
            {...(animate
                ? {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5 },
                    // Simplified hover effect
                    whileHover: { scale: 1.01 },
                }
                : {})}
        >
            {children}
        </Component>
    );
} 