'use client';

import React from 'react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 mt-12 border-t border-neon-cyan-accessible">
            <div className="container mx-auto text-center">
                <p className="text-white">
                    &copy; {currentYear} North Shore Run Club. Stay rad!
                </p>
            </div>
        </footer>
    );
} 