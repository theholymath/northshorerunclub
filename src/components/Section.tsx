'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    children: React.ReactNode;
    title?: string;
    id?: string;
    alternate?: boolean;
    className?: string;
    isGlowing?: boolean;
}

export function Section({
    children,
    title,
    id,
    alternate = false,
    className = '',
    isGlowing = true,
}: SectionProps) {
    const baseClass = 'bg-black bg-opacity-90';

    const glowClass = isGlowing
        ? alternate
            ? 'shadow-neon-pink'
            : 'shadow-neon-cyan'
        : '';

    const borderClass = isGlowing
        ? alternate
            ? 'border border-neon-pink-accessible'
            : 'border border-neon-cyan-accessible'
        : '';

    const titleClass = alternate
        ? 'text-neon-cyan text-shadow-neon-pink'
        : 'text-neon-pink text-shadow-neon-cyan';

    return (
        <motion.section
            id={id}
            className={`my-12 p-8 rounded-lg ${baseClass} ${glowClass} ${borderClass} ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {title && (
                <motion.h2
                    className={`text-3xl font-mono font-bold mb-6 text-center ${titleClass}`}
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                >
                    {title}
                </motion.h2>
            )}
            <div className="space-y-4">{children}</div>
        </motion.section>
    );
} 