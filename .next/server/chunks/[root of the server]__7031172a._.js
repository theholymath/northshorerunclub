module.exports = {

"[project]/.next-internal/server/app/api/weather/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route.runtime.dev.js [external] (next/dist/compiled/next-server/app-route.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/api/weather/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET),
    "revalidate": (()=>revalidate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
const revalidate = 3600;
async function GET() {
    try {
        // Define headers required by the Weather.gov API
        const headers = {
            'User-Agent': '(northshorerunclub.com, contact@northshorerunclub.com)',
            'Accept': 'application/geo+json'
        };
        // Step 1: Get the grid forecast endpoint for Shorewood, WI
        const pointsResponse = await fetch('https://api.weather.gov/points/43.0892,-87.8876', {
            headers,
            next: {
                revalidate: 86400
            } // Cache for 24 hours
        });
        if (!pointsResponse.ok) {
            throw new Error(`Failed to get points data: ${pointsResponse.statusText}`);
        }
        const pointsData = await pointsResponse.json();
        const forecastUrl = pointsData.properties.forecast;
        // Step 2: Get the forecast data from the endpoint
        const forecastResponse = await fetch(forecastUrl, {
            headers,
            next: {
                revalidate: 3600
            } // Cache for 1 hour
        });
        if (!forecastResponse.ok) {
            throw new Error(`Failed to get forecast data: ${forecastResponse.statusText}`);
        }
        const forecastData = await forecastResponse.json();
        const periods = forecastData.properties.periods;
        // Step 3: Find the forecast for the next Wednesday at 6 PM
        const today = new Date();
        let nextWednesday = new Date();
        nextWednesday.setDate(today.getDate() + (3 + 7 - today.getDay()) % 7); // Find next Wednesday (3 is Wednesday)
        nextWednesday.setHours(18, 0, 0, 0); // Set time to 6 PM
        // Step 4: Find the appropriate forecast period
        // Using the same logic as the original implementation
        let forecastPeriod = periods.find((period)=>{
            const periodStart = new Date(period.startTime);
            return periodStart.getDay() === nextWednesday.getDay() && periodStart.getHours() >= 12; // Find Wednesday evening
        });
        // If we didn't find an evening period on Wednesday, just use the first period
        if (!forecastPeriod && periods.length > 0) {
            forecastPeriod = periods[0];
        }
        if (!forecastPeriod) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Forecast data not available'
            }, {
                status: 404
            });
        }
        // Return just the data we need
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            temperature: forecastPeriod.temperature,
            temperatureUnit: forecastPeriod.temperatureUnit,
            shortForecast: forecastPeriod.shortForecast,
            icon: forecastPeriod.icon,
            startTime: forecastPeriod.startTime,
            endTime: forecastPeriod.endTime
        });
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch weather data'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__7031172a._.js.map