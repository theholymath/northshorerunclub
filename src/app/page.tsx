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

      {/* Hero Section with Background Image */}
      <Section className="hero-section-bg min-h-[60vh] flex items-center justify-center">
        {/* Content Panel */}
        <div className="bg-black/75 p-8 rounded-lg max-w-3xl mx-auto text-center border border-neon-cyan-accessible/50 shadow-lg">
          <h2 className="text-4xl font-mono font-bold mb-4 text-neon-pink text-shadow-neon-pink">
            Join the North Shore Running Community!
          </h2>
          <p className="text-white mb-6 text-lg">
            A running community for all levels of runners! Based in Shorewood open to all!
          </p>
          <h2 className="text-3xl font-mono font-bold mb-2 text-neon-cyan text-shadow-neon-cyan animate-pulse">
            Every Wednesday Run starts at 6:15 PM!
          </h2>
          <h1 className="text-2xl font-mono font-bold mb-4 text-white">
            Last Run of Season: November 6, 2024
          </h1>
          <h2 className="text-xl font-mono mb-2">
            Meet at the <a href="https://www.foxholeshorewood.com" className="text-neon-pink hover:text-neon-cyan transition-colors text-shadow-neon-pink">
              Foxhole Craft Beer Shop & Kitchen
            </a> in Shorewood and stay for beer and food and fun.
          </h2>
        </div>
      </Section>

      {/* New Section for Secondary Info (Joining/Route) */}
      <Section alternate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-4 bg-black bg-opacity-90 border border-neon-cyan-accessible rounded-lg shadow-neon-cyan-sm">
            <h3 className="text-xl font-bold mb-4 text-neon-pink text-shadow-neon-pink">JOINING US IS FREE AND EASY:</h3>
            <ol className="list-decimal list-inside space-y-2 text-white">
              <li>Arrive at Foxhole Craft Beer Shop & Kitchen on Wednesdays at 6pm</li>
              <li>Sign in with Ryan (just ask!)</li>
              <li>Group pic and run start at 6:15 sharp!</li>
              <li>Follow the route - NEW ONE THIS WEEK!!!</li>
              <li>Finish at Foxhole Craft Beer Shop & Kitchen</li>
              <li>All night happy hour at the AFTERPARTY!</li>
            </ol>
          </div>

          <div className="p-4 bg-black bg-opacity-90 border border-neon-pink-accessible rounded-lg shadow-neon-pink-sm">
            <h3 className="text-xl font-bold mb-4 text-neon-cyan text-shadow-neon-cyan">RUNNING ROUTE</h3>
            <p className="text-white mb-4">
              We begin at Foxhole Craft Beer Shop & Kitchen (<a
                href="https://maps.app.goo.gl/W5zgEDfK6vWwQv3MA"
                className="text-neon-cyan hover:text-neon-pink transition-colors text-shadow-neon-cyan"
              >
                4144 N Oakland Ave
              </a>).
            </p>
            <p className="font-bold text-neon-cyan text-shadow-neon-cyan">New route this week!</p>
            <p className="text-white">
              We will be running to Lake Drive to ensure we have street light and better visibility!
            </p>
          </div>
        </div>
      </Section>

      <Section alternate>
        <div className="bg-black bg-opacity-95 p-6 rounded-lg text-center border border-neon-pink-accessible shadow-neon-pink">
          <h2 className="text-2xl font-bold mb-4 text-neon-cyan text-shadow-neon-cyan">Final Run of season, Nov. 6, 2024</h2>
          <h3 className="text-xl font-bold mb-4 text-white animate-pulse">Run Starts at 6:15 PM!</h3>

          <ul className="list-none space-y-2 text-white mb-6">
            <li>✓ All ages and abilities welcome</li>
            <li>✓ Runners with strollers encouraged</li>
            <li>✓ Walk, jog, or run - it's up to you!</li>
          </ul>

          <div className="mb-4 bg-black bg-opacity-80 p-4 rounded border border-neon-cyan-accessible">
            <p className="font-bold text-neon-cyan text-shadow-neon-cyan">Schedule:</p>
            <p className="text-white">6:00 - 6:15 PM: Arrival and sign-up</p>
            <p className="text-white">6:15 PM sharp: Run begins</p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Shorewood Weather Forecast</h2>
            <WeatherForecast />
          </div>
        </div>
      </Section>

      <Section title="Recommended 5k Route">
        <p className="text-white text-center mb-6">
          Check out our gnarly suggested route, but remember - you can choose your own adventure!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-square mb-2 bg-black p-2 rounded border border-neon-cyan-accessible shadow-neon-cyan-sm">
              <Image
                src="/assets/route_lake_loop.png"
                alt="Recommended Running Route"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className="text-neon-cyan text-shadow-neon-cyan text-sm">Suggested 5k Route</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-full aspect-square mb-2 bg-black p-2 rounded border border-neon-cyan-accessible shadow-neon-cyan-sm">
              <Image
                src="/assets/routenorth.png"
                alt="Recommended Running Route"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className="text-neon-cyan text-shadow-neon-cyan text-sm">Suggested 5k Route</p>
          </div>
        </div>

        <p className="text-white text-center mt-6">
          Feel free to modify this route or create your own path. The journey is yours to customize!
        </p>
      </Section>

      <Section title="About Us" alternate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard
            title="Inclusive"
            description="We welcome runners of all ages and abilities. Whether you're a seasoned marathoner or taking your first steps, there's a place for you in our community."
            iconSrc="/assets/Nike Sneaker Interpretation.webp"
            iconAlt="Inclusive Icon"
          />

          <InfoCard
            title="Social"
            description="Join us for post-run beers and food at Foxhole Craft Beer Shop & Kitchen. It's the perfect opportunity to meet fellow runners & neighbors."
            iconSrc="/assets/Space Bar Beer Bottle.webp"
            iconAlt="Social Icon"
          />
        </div>
      </Section>

      <Section>
        <NeonBox color="pink" animate intensity="high">
          <div className="text-center">
            <h2 className="text-3xl font-mono font-bold mb-6 text-neon-cyan text-shadow-neon-cyan">Join Us!</h2>
            <RetroButton
              href="https://www.foxholeshorewood.com"
              color="cyan"
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
