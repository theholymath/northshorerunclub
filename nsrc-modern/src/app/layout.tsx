import './globals.css';
import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'North Shore Run Club',
  description: 'A running community for all levels of runners based in Shorewood, WI.',
  keywords: 'running club, Shorewood, Wisconsin, run, community, beer run, pub run',
  openGraph: {
    title: 'North Shore Run Club',
    description: 'A running community for all levels of runners based in Shorewood, WI.',
    url: 'https://northshorerunclub.com',
    siteName: 'North Shore Run Club',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black min-h-screen">
        <div className="bg-radial-black">
          {/* Stars effect */}
          <div className="fixed inset-0 z-0 opacity-30 pointer-events-none">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(2px 2px at 20px 30px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 70px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 50px 160px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 130px 80px, #ffffff, rgba(0,0,0,0)), radial-gradient(2px 2px at 160px 120px, #ffffff, rgba(0,0,0,0))',
              backgroundSize: '200px 200px'
            }}></div>
          </div>

          <div className="min-h-screen flex flex-col relative z-10">
            <main className="container mx-auto px-4 max-w-4xl flex-grow py-8">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
