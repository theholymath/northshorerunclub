'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface InfoCardProps {
    title: string;
    description: string;
    iconSrc: string;
    iconAlt: string;
    className?: string;
}

export function InfoCard({
    title,
    description,
    iconSrc,
    iconAlt,
    className = '',
}: InfoCardProps) {
    const safeDescription = description.replace(/'/g, "&apos;");

    return (
        <motion.div
            className={`bg-black bg-opacity-95 border-2 border-neon-cyan-accessible rounded-lg p-6 flex flex-col items-center text-center ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{
                boxShadow: '0 0 4px rgba(0, 255, 255, 0.7)',
                transition: { duration: 0.3 },
            }}
        >
            <div
                className="mb-4 rounded-full overflow-hidden w-20 h-20 flex items-center justify-center bg-black p-2 border-2 border-neon-cyan-accessible"
            >
                <Image
                    src={iconSrc}
                    alt={iconAlt}
                    width={70}
                    height={70}
                    className="object-cover"
                />
            </div>
            <h3 className="text-heading-4 font-bold mb-3 text-neon-cyan">{title}</h3>
            <p className="text-body text-white" dangerouslySetInnerHTML={{ __html: safeDescription }} />
        </motion.div>
    );
} 