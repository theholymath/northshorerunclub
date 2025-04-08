'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SectionProps {
    children: React.ReactNode;
    title?: string;
    titleIcon?: IconDefinition;
    id?: string;
    alternate?: boolean;
    className?: string;
    isGlowing?: boolean;
}

export function Section({
    children,
    title,
    titleIcon,
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
                    className={`text-heading-2 font-mono font-bold mb-8 text-center ${titleClass} flex items-center justify-center gap-2`}
                >
                    {titleIcon && <FontAwesomeIcon icon={titleIcon} className="h-6 w-6" />}
                    {title}
                </h2>
            )}
            <div className="space-y-6">{children}</div>
        </motion.section>
    );
} 