import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ORBIT/VEIL — Tumbling Debris Pose Intelligence',
  description: 'Cinematic real-time monocular 6-DoF pose estimation and capture-corridor prototype for non-cooperative tumbling space debris.',
  openGraph: {
    title: 'ORBIT/VEIL',
    description: 'Tumbling Debris Pose Intelligence',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'ORBIT/VEIL tumbling debris pose intelligence' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ORBIT/VEIL',
    description: 'Tumbling Debris Pose Intelligence',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
