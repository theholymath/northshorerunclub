import { NextResponse } from 'next/server';

// Cache the weather forecast for 1 hour
export const revalidate = 3600;

export async function GET() {
    try {
        // Define headers required by the Weather.gov API
        const headers = {
            'User-Agent': '(northshorerunclub.com, contact@northshorerunclub.com)',
            'Accept': 'application/geo+json'
        };

        // Step 1: Get the grid forecast endpoint for Shorewood, WI
        const pointsResponse = await fetch('https://api.weather.gov/points/43.0892,-87.8876', {
            headers,
            next: { revalidate: 86400 } // Cache for 24 hours
        });

        if (!pointsResponse.ok) {
            throw new Error(`Failed to get points data: ${pointsResponse.statusText}`);
        }

        const pointsData = await pointsResponse.json();
        const forecastUrl = pointsData.properties.forecast;

        // Step 2: Get the forecast data from the endpoint
        const forecastResponse = await fetch(forecastUrl, {
            headers,
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!forecastResponse.ok) {
            throw new Error(`Failed to get forecast data: ${forecastResponse.statusText}`);
        }

        const forecastData = await forecastResponse.json();
        const periods = forecastData.properties.periods;

        // Step 3: Find the forecast for the next Wednesday at 6 PM
        const today = new Date();
        // eslint-disable-next-line prefer-const
        let nextWednesday = new Date();
        nextWednesday.setDate(today.getDate() + ((3 + 7 - today.getDay()) % 7)); // Find next Wednesday (3 is Wednesday)
        nextWednesday.setHours(18, 0, 0, 0); // Set time to 6 PM

        // Step 4: Find the appropriate forecast period
        // Using the same logic as the original implementation
        let forecastPeriod = periods.find(period => {
            const periodStart = new Date(period.startTime);
            return periodStart.getDay() === nextWednesday.getDay() &&
                periodStart.getHours() >= 12; // Find Wednesday evening
        });

        // If we didn't find an evening period on Wednesday, just use the first period
        if (!forecastPeriod && periods.length > 0) {
            forecastPeriod = periods[0];
        }

        if (!forecastPeriod) {
            return NextResponse.json(
                { error: 'Forecast data not available' },
                { status: 404 }
            );
        }

        // Return just the data we need
        return NextResponse.json({
            temperature: forecastPeriod.temperature,
            temperatureUnit: forecastPeriod.temperatureUnit,
            shortForecast: forecastPeriod.shortForecast,
            icon: forecastPeriod.icon,
            startTime: forecastPeriod.startTime,
            endTime: forecastPeriod.endTime,
        });
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        return NextResponse.json(
            { error: 'Failed to fetch weather data' },
            { status: 500 }
        );
    }
} 