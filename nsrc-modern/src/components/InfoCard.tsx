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
    return (
        <motion.div
            className={`bg-black bg-opacity-95 border border-neon-pink-accessible rounded-lg p-6 flex flex-col items-center text-center ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{
                boxShadow: '0 0 15px rgba(255, 0, 255, 0.7), 0 0 30px rgba(0, 255, 255, 0.4)',
                transition: { duration: 0.3 },
            }}
        >
            <motion.div
                className="mb-4 rounded-full overflow-hidden w-20 h-20 flex items-center justify-center bg-black p-2 border-2 border-neon-cyan-accessible"
                whileHover={{
                    scale: 1.05,
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.7)',
                }}
            >
                <Image
                    src={iconSrc}
                    alt={iconAlt}
                    width={70}
                    height={70}
                    className="object-cover"
                />
            </motion.div>
            <h3 className="text-xl font-bold mb-2 text-neon-pink text-shadow-neon-pink">{title}</h3>
            <p className="text-white">{description}</p>
        </motion.div>
    );
} 