import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Section } from '@/components/Section';
import { NeonBox } from '@/components/NeonBox';
import { InfoCard } from '@/components/InfoCard';
import { RetroButton } from '@/components/RetroButton';
import { WeatherForecast } from '@/components/WeatherForecast';

export default function Home() {
  return (
    <>
      <Header title="North Shore Pub Run" />

      {/* Hero Section - Primary Information */}
      <Section className="hero-section-bg min-h-[60vh] flex items-center justify-center">
        <div className="bg-black/75 p-8 rounded-lg max-w-3xl mx-auto text-center border-2 border-neon-cyan-accessible shadow-neon-cyan-sm">
          <h1 className="text-4xl font-mono font-bold mb-4 text-neon-pink">
            North Shore Pub Run
          </h1>

          {/* Most important information highlighted */}
          <div className="bg-black/80 p-4 rounded-lg mb-6 border border-neon-cyan-accessible">
            <h2 className="text-3xl font-mono font-bold mb-2 text-neon-cyan animate-pulse">
              Wednesdays at 6:15 PM
            </h2>
            <h3 className="text-2xl font-mono font-bold mb-2 text-white">
              First Run: April 22, 2025
            </h3>
            <p className="text-xl font-mono">
              <span className="text-neon-pink">Location:</span> <a href="https://www.foxholeshorewood.com" className="text-neon-cyan hover:text-neon-pink transition-colors">
                Foxhole Craft Beer Shop & Kitchen
              </a>
            </p>
            <p className="text-white mt-2">4144 N Oakland Ave, Shorewood</p>
          </div>

          <p className="text-white text-lg">
            A running community for all abilities. Free to join, followed by drinks & socializing!
          </p>
        </div>
      </Section>

      {/* How It Works - Combined registration and joining info */}
      <Section title="How It Works" alternate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-black bg-opacity-90 border-2 border-neon-cyan-accessible rounded-lg shadow-neon-cyan-sm">
            <h3 className="text-xl font-bold mb-4 text-neon-pink">JOINING US:</h3>
            <ol className="list-decimal list-inside space-y-2 text-white">
              <li>Arrive at Foxhole by 6:00 PM on Wednesdays</li>
              <li>Register once for the season (required for all runners)</li>
              <li>Join the group photo at 6:10 PM</li>
              <li>Run starts at 6:15 PM sharp!</li>
              <li>Return to Foxhole after your run</li>
              <li className="text-neon-pink">Stay for the AFTERPARTY!</li>
            </ol>
          </div>

          <div className="p-6 bg-black bg-opacity-90 border-2 border-neon-cyan-accessible rounded-lg shadow-neon-cyan-sm">
            <h3 className="text-xl font-bold mb-4 text-neon-pink">WHAT TO EXPECT:</h3>
            <ul className="list-none space-y-2 text-white">
              <li>✓ All ages and abilities welcome</li>
              <li>✓ Runners with strollers encouraged</li>
              <li>✓ Walk, jog, or run - it's up to you!</li>
              <li>✓ Typically 5k distance (3.1 miles)</li>
              <li>✓ Choose from suggested routes or create your own</li>
              <li>✓ Social gathering afterwards at Foxhole</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-black bg-opacity-80 p-4 rounded border-2 border-neon-cyan-accessible mx-auto max-w-xl">
          <p className="font-bold text-neon-cyan text-center text-lg">Schedule:</p>
          <div className="grid grid-cols-2 gap-2 text-white">
            <p className="text-right">6:00 - 6:10 PM:</p>
            <p>Arrival & Registration</p>
            <p className="text-right">6:10 PM:</p>
            <p>Group Photo</p>
            <p className="text-right">6:15 PM:</p>
            <p>Run Begins</p>
            <p className="text-right">7:00 PM+:</p>
            <p>Social Gathering</p>
          </div>
        </div>
      </Section>

      {/* Route Information */}
      <Section title="Suggested Routes">
        <p className="text-white text-center mb-6">
          We have two suggested 5k routes, but you're welcome to modify or create your own!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-neon-cyan mb-2 font-bold">Lake Loop Route</h3>
            <div className="relative w-full aspect-square mb-2 bg-black p-2 rounded border-2 border-neon-cyan-accessible shadow-neon-cyan-sm">
              <Image
                src="/assets/route_lake_loop.png"
                alt="Lake Loop Running Route"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className="text-white text-sm">Scenic route along Lake Michigan</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-neon-cyan mb-2 font-bold">North Route</h3>
            <div className="relative w-full aspect-square mb-2 bg-black p-2 rounded border-2 border-neon-cyan-accessible shadow-neon-cyan-sm">
              <Image
                src="/assets/routenorth.png"
                alt="North Running Route"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className="text-white text-sm">Neighborhood route through Shorewood</p>
          </div>
        </div>
      </Section>

      {/* About Us */}
      <Section title="About Us" alternate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard
            title="Inclusive Community"
            description="We welcome runners of all ages and abilities. Whether you're a seasoned marathoner or taking your first steps, there's a place for you in our community."
            iconSrc="/assets/Nike Sneaker Interpretation.webp"
            iconAlt="Inclusive Icon"
          />

          <InfoCard
            title="Social Experience"
            description="Join us for post-run beers and food at Foxhole Craft Beer Shop & Kitchen. It's the perfect opportunity to meet fellow runners & neighbors."
            iconSrc="/assets/Space Bar Beer Bottle.webp"
            iconAlt="Social Icon"
          />
        </div>
      </Section>

      {/* Weather */}
      <Section title="Shorewood Weather Forecast">
        <div className="max-w-xl mx-auto">
          <WeatherForecast />
        </div>
      </Section>

      {/* Call to Action */}
      <Section>
        <NeonBox color="cyan" animate={false}>
          <div className="text-center">
            <h2 className="text-3xl font-mono font-bold mb-6 text-neon-pink">Join Us This Wednesday!</h2>
            <RetroButton
              href="https://www.foxholeshorewood.com"
              color="pink"
              className="mx-auto"
            >
              View Foxhole Location
            </RetroButton>
          </div>
        </NeonBox>
      </Section>
    </>
  );
}
