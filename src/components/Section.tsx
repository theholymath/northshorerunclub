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
            ? 'shadow-neon-pink-sm'
            : 'shadow-neon-cyan-sm'
        : '';

    const borderClass = isGlowing
        ? alternate
            ? 'border-2 border-neon-pink-accessible'
            : 'border-2 border-neon-cyan-accessible'
        : '';

    const titleClass = alternate
        ? 'text-neon-cyan'
        : 'text-neon-pink';

    return (
        <motion.section
            id={id}
            className={`my-16 p-8 rounded-lg ${baseClass} ${glowClass} ${borderClass} ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {title && (
                <h2
                    className={`text-3xl font-mono font-bold mb-8 text-center ${titleClass}`}
                >
                    {title}
                </h2>
            )}
            <div className="space-y-6">{children}</div>
        </motion.section>
    );
} 