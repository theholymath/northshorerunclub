'use client';

import React, { useState } from 'react';
import { SWRConfig, useSWRConfig } from 'swr';
import useSWR from 'swr/immutable';
import Image from 'next/image';
import { NeonBox } from './NeonBox';

// The fetcher function for SWR
const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
};

export function WeatherForecast() {
    // For handling image loading errors
    const [imageError, setImageError] = useState(false);

    // Instead of directly fetching, we'll use Next.js API route
    const { data, error, isLoading } = useSWR('/api/weather', fetcher);

    // Helper function to format date
    const formatDate = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        return date.toLocaleDateString(undefined, options);
    };

    // Find next Wednesday at 6 PM
    const getNextWednesday = () => {
        const today = new Date();
        const nextWednesday = new Date();
        nextWednesday.setDate(today.getDate() + ((3 + 7 - today.getDay()) % 7)); // 3 is Wednesday
        nextWednesday.setHours(18, 0, 0, 0); // Set to 6 PM
        return nextWednesday;
    };

    const nextWednesday = getNextWednesday();

    if (isLoading) {
        return (
            <div className="p-4 text-center">
                <div className="text-neon-cyan animate-pulse">Loading forecast...</div>
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="p-4 text-center">
                <div className="text-neon-pink">
                    Weather data currently unavailable. Check back soon!
                </div>
            </div>
        );
    }

    return (
        <NeonBox color="cyan" className="text-center">
            <h3 className="text-2xl font-bold text-neon-pink mb-4">
                Forecast for {formatDate(nextWednesday)} at 6 PM
            </h3>
            {data.icon && !imageError ? (
                <div className="flex justify-center mb-2">
                    <Image
                        src={data.icon}
                        alt="Weather icon"
                        width={100}
                        height={100}
                        className="mx-auto"
                        onError={() => setImageError(true)}
                        unoptimized // Skip optimization for external images
                    />
                </div>
            ) : (
                <div className="text-neon-cyan mb-2">
                    {data.shortForecast && data.shortForecast.includes("Rain") ? "🌧️" :
                        data.shortForecast && data.shortForecast.includes("Snow") ? "❄️" :
                            data.shortForecast && data.shortForecast.includes("Cloud") ? "☁️" :
                                data.shortForecast && data.shortForecast.includes("Sun") ? "☀️" :
                                    data.shortForecast && data.shortForecast.includes("Clear") ? "🌙" : "��️"}
                </div>
            )}
            <div className="text-white text-xl">
                <p className="mb-2">{data.shortForecast}</p>
                <p>Temperature: {data.temperature}&deg; {data.temperatureUnit}</p>
            </div>
        </NeonBox>
    );
} 