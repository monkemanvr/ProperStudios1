import './globals.css';
import type { Metadata } from 'next';
import { VT323, Press_Start_2P } from 'next/font/google';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';

const vt323 = VT323({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-vt323',
  display: 'swap',
});

const pressStart = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-press-start',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Proper Studios — 3D Game Development',
  description:
    'Proper Studios is an independent 3D game development studio crafting immersive worlds, bold characters, and unforgettable interactive experiences.',
  openGraph: {
    title: 'Proper Studios — 3D Game Development',
    description:
      'Independent 3D game development studio crafting immersive worlds and unforgettable interactive experiences.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proper Studios — 3D Game Development',
    description:
      'Independent 3D game development studio crafting immersive worlds and unforgettable interactive experiences.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${vt323.variable} ${pressStart.variable}`}>
      <body className="min-h-screen bg-background font-mono-retro text-lg antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
