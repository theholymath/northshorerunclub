import { NextResponse } from 'next/server';

// Cache the weather forecast for 1 hour
export const revalidate = 3600;

// Define the structure of a weather period object for the response
interface WeatherPeriod {
    startTime: string;
    endTime: string;
    temperature: number;
    temperatureUnit: string;
    shortForecast: string;
    icon: string;
}

const LAT = 43.0892;
const LON = -87.8876;
const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
const OWM_BASE = 'https://api.openweathermap.org/data/2.5/forecast';

// Helper to get next Wednesday at 6pm
function getNextWednesday6pm() {
    const today = new Date();
    const nextWednesday = new Date();
    nextWednesday.setDate(today.getDate() + ((3 + 7 - today.getDay()) % 7)); // 3 is Wednesday
    nextWednesday.setHours(18, 0, 0, 0); // 6 PM
    return nextWednesday;
}

// Helper to convert Kelvin to Fahrenheit
function kelvinToF(k: number) {
    return Math.round((k - 273.15) * 9 / 5 + 32);
}

export async function GET() {
    try {
        if (!API_KEY) {
            return NextResponse.json({ error: 'API key not set' }, { status: 500 });
        }

        const nextWed = getNextWednesday6pm();
        const url = `${OWM_BASE}?lat=${LAT}&lon=${LON}&appid=${API_KEY}`;
        const owmRes = await fetch(url);
        if (!owmRes.ok) {
            throw new Error(`Failed to fetch OWM: ${owmRes.statusText}`);
        }
        const owmData = await owmRes.json();

        let forecast: WeatherPeriod | null = null;
        const sourceType = '3hourly';

        if (owmData.list && Array.isArray(owmData.list)) {
            // Find the forecast entry closest to next Wednesday at 6pm
            let closest = owmData.list[0];
            let minDiff = Math.abs(new Date(closest.dt * 1000).getTime() - nextWed.getTime());
            for (const entry of owmData.list) {
                const entryDate = new Date(entry.dt * 1000);
                const diff = Math.abs(entryDate.getTime() - nextWed.getTime());
                if (diff < minDiff) {
                    closest = entry;
                    minDiff = diff;
                }
            }
            const entryDate = new Date(closest.dt * 1000);
            forecast = {
                startTime: entryDate.toISOString(),
                endTime: new Date(entryDate.getTime() + 3 * 60 * 60 * 1000).toISOString(),
                temperature: kelvinToF(closest.main.temp),
                temperatureUnit: 'F',
                shortForecast: closest.weather[0]?.description || '',
                icon: `https://openweathermap.org/img/wn/${closest.weather[0]?.icon}@2x.png`,
            };
        }

        if (!forecast) {
            return NextResponse.json({ error: 'Forecast data not available' }, { status: 404 });
        }

        return NextResponse.json({
            ...forecast,
            forecastType: sourceType,
        });
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        return NextResponse.json(
            { error: 'Failed to fetch weather data' },
            { status: 500 }
        );
    }
} 