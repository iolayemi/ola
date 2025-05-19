import { Inter } from 'next/font/google';
import './globals.css';
import type { ReactNode } from 'react';
import { Navbar } from '@/components/Navbar';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://olayemi-portfolio.vercel.app'),
  title: 'Olayemi Ibukun | Software Engineer & Cloud Architect',
  description: 'Software Engineer and Cloud Architect with expertise in building scalable distributed systems and cloud-native applications.',
  authors: [{ name: 'Olayemi Ibukun' }],
  keywords: ['Software Engineer', 'Cloud Architect', 'Kubernetes', 'DevOps', 'AWS', 'Azure'],
  openGraph: {
    title: 'Olayemi Lasisi | Full Stack Engineer & DevOps Specialist',
    description: 'Experienced software engineer specializing in cloud architecture, containerization, and full-stack development.',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Olayemi Lasisi | Full Stack Engineer & DevOps Specialist',
    description: 'Experienced software engineer specializing in cloud architecture, containerization, and full-stack development.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Rubik:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-midnight text-slate-100`}>
        <Navbar />
        {children}
        
        <footer className="bg-terminal py-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Olayemi Ibukun. All rights reserved.
          </p>
        </footer>
        
        {/* Back to top button */}
        <div className="fixed bottom-6 right-6 z-50">
          <a 
            href="#home" 
            className="bg-accent hover:bg-accent-hover text-white h-10 w-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
            aria-label="Back to top"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </a>
        </div>
        
        {/* Analytics script (placeholder) */}
        {process.env.NODE_ENV === 'production' && (
          <script 
            dangerouslySetInnerHTML={{
              __html: `
                console.log('Analytics placeholder');
                // Add your analytics script here
              `
            }}
          />
        )}
      </body>
    </html>
  );
}
