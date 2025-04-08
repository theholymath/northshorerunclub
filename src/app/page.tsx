import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Section } from '@/components/Section';
import { NeonBox } from '@/components/NeonBox';
import { InfoCard } from '@/components/InfoCard';
import { RetroButton } from '@/components/RetroButton';
import { WeatherForecast } from '@/components/WeatherForecast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faLocationDot,
  faCalendarDays,
  faPersonRunning,
  faCircleInfo,
  faListCheck,
  faMapLocationDot,
  faUsers,
  faCloudSun
} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <>
      <Header title="North Shore Pub Run" />

      {/* Hero Section - Primary Information */}
      <Section className="hero-section-bg min-h-[60vh] flex items-center justify-center">
        <div className="bg-black/75 p-8 rounded-lg max-w-3xl mx-auto text-center border-2 border-neon-cyan-accessible shadow-neon-cyan-sm">
          <h1 className="text-heading-1 font-mono font-bold mb-6 text-neon-pink">
            North Shore Pub Run
          </h1>

          {/* Most important information highlighted */}
          <div className="bg-black/80 p-6 rounded-lg mb-8 border border-neon-cyan-accessible">
            <h2 className="text-heading-2 font-mono font-bold mb-4 text-neon-cyan animate-pulse flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faClock} className="h-6 w-6" /> Wednesdays at 6:15 PM
            </h2>
            <h3 className="text-heading-3 font-mono font-bold mb-4 text-white flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faCalendarDays} className="h-5 w-5" /> First Run: April 22, 2025
            </h3>
            <p className="text-body-large font-mono mb-2 flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faLocationDot} className="h-5 w-5 text-neon-pink" />
              <span className="text-neon-pink font-bold">Location:</span> <a href="https://www.foxholeshorewood.com" className="text-neon-cyan hover:text-neon-pink transition-colors">
                Foxhole Craft Beer Shop & Kitchen
              </a>
            </p>
            <p className="text-body text-white mt-2">4144 N Oakland Ave, Shorewood</p>
          </div>

          <p className="text-body-large text-white flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faPersonRunning} className="h-5 w-5 text-neon-cyan" />
            A running community for all abilities. Free to join, followed by drinks & socializing!
          </p>
        </div>
      </Section>

      {/* How It Works - Combined registration and joining info */}
      <Section title="How It Works" alternate titleIcon={faCircleInfo}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-black bg-opacity-90 border-2 border-neon-cyan-accessible rounded-lg shadow-neon-cyan-sm">
            <h3 className="text-heading-4 font-bold mb-4 text-neon-pink flex items-center gap-2">
              <FontAwesomeIcon icon={faListCheck} className="h-5 w-5" /> JOINING US:
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-white text-body">
              <li>Arrive at Foxhole by 6:00 PM on Wednesdays</li>
              <li>Register once for the season (required for all runners)</li>
              <li>Join the group photo at 6:10 PM</li>
              <li>Run starts at 6:15 PM sharp!</li>
              <li>Return to Foxhole after your run</li>
              <li className="text-neon-pink font-bold">Stay for the AFTERPARTY!</li>
            </ol>
          </div>

          <div className="p-6 bg-black bg-opacity-90 border-2 border-neon-cyan-accessible rounded-lg shadow-neon-cyan-sm">
            <h3 className="text-heading-4 font-bold mb-4 text-neon-pink flex items-center gap-2">
              <FontAwesomeIcon icon={faCircleInfo} className="h-5 w-5" /> WHAT TO EXPECT:
            </h3>
            <ul className="list-none space-y-3 text-white text-body">
              <li>✓ All ages and abilities welcome</li>
              <li>✓ Runners with strollers encouraged</li>
              <li>✓ Walk, jog, or run - it's up to you!</li>
              <li>✓ Typically 5k distance (3.1 miles)</li>
              <li>✓ Choose from suggested routes or create your own</li>
              <li>✓ Social gathering afterwards at Foxhole</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-black bg-opacity-80 p-6 rounded-lg border-2 border-neon-cyan-accessible mx-auto max-w-xl">
          <p className="font-bold text-neon-cyan text-center text-heading-4 mb-4 flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faClock} className="h-5 w-5" /> Schedule:
          </p>
          <div className="grid grid-cols-2 gap-3 text-body text-white">
            <p className="text-right font-bold">6:00 - 6:10 PM:</p>
            <p>Arrival & Registration</p>
            <p className="text-right font-bold">6:10 PM:</p>
            <p>Group Photo</p>
            <p className="text-right font-bold">6:15 PM:</p>
            <p>Run Begins</p>
            <p className="text-right font-bold">7:00 PM+:</p>
            <p>Social Gathering</p>
          </div>
        </div>
      </Section>

      {/* Route Information */}
      <Section title="Suggested Routes" titleIcon={faMapLocationDot}>
        <p className="text-body text-white text-center mb-6">
          We have two suggested 5k routes, but you're welcome to modify or create your own!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <h3 className="text-heading-4 text-neon-cyan mb-3 font-bold flex items-center gap-2">
              <FontAwesomeIcon icon={faMapLocationDot} className="h-4 w-4" /> Lake Loop Route
            </h3>
            <div className="relative w-full aspect-square mb-3 bg-black p-2 rounded border-2 border-neon-cyan-accessible shadow-neon-cyan-sm">
              <Image
                src="/assets/route_lake_loop.png"
                alt="Lake Loop Running Route"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className="text-body text-white">Scenic route along Lake Michigan</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-heading-4 text-neon-cyan mb-3 font-bold flex items-center gap-2">
              <FontAwesomeIcon icon={faMapLocationDot} className="h-4 w-4" /> North Route
            </h3>
            <div className="relative w-full aspect-square mb-3 bg-black p-2 rounded border-2 border-neon-cyan-accessible shadow-neon-cyan-sm">
              <Image
                src="/assets/routenorth.png"
                alt="North Running Route"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className="text-body text-white">Neighborhood route on Oak Leaf Trail in Shorewood</p>
          </div>
        </div>
      </Section>

      {/* About Us */}
      <Section title="About Us" titleIcon={faUsers} alternate>
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
      <Section title="Shorewood Weather Forecast" titleIcon={faCloudSun}>
        <div className="max-w-xl mx-auto">
          <WeatherForecast />
        </div>
      </Section>

      {/* Call to Action */}
      <Section>
        <NeonBox color="cyan" animate={false}>
          <div className="text-center">
            <h2 className="text-heading-2 font-mono font-bold mb-6 text-neon-pink flex items-center justify-center gap-3">
              <FontAwesomeIcon icon={faPersonRunning} className="h-7 w-7" /> Join Us This Wednesday!
            </h2>
            <RetroButton
              href="https://www.foxholeshorewood.com"
              color="pink"
              className="mx-auto text-body-large"
            >
              View Foxhole Location
            </RetroButton>
          </div>
        </NeonBox>
      </Section>
    </>
  );
}
