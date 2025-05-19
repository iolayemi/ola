'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Improved typing effect component with guaranteed correct text
const TypedText = ({ text, delay = 100 }: { text: string, delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    // Reset text when component mounts or text changes
    setDisplayedText('');
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, delay);

    return () => clearInterval(typingInterval);
  }, [text, delay]);

  // Return the currently displayed text with a blinking cursor
  return (
    <span className="typing-text">
      {displayedText}
      <span className="typing-cursor">|</span>
    </span>
  );
};

export function TerminalHero() {
  // Define the correct text constants to ensure consistency
  const nameText = "Olayemi Lasisi";
  const titleText = "Full Stack Engineer & DevOps Specialist";
  const headlineText = "Master of Digital Tools, Architect of Intelligent Systems";

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center bg-midnight pb-16 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl mx-auto px-6"
      >
        <div className="bg-terminal rounded-lg shadow-2xl overflow-hidden">
          {/* Terminal header */}
          <div className="bg-gray-800 px-4 py-2 flex items-center border-b border-gray-700">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="mx-auto text-xs text-gray-400">terminal ~ olayemi-portfolio</div>
          </div>

          {/* Terminal content */}
          <div className="p-6 font-mono text-sm">
            <div className="flex mb-6 items-center gap-8">
              <Image 
                src="/headshot.jpg" 
                alt={nameText}
                width={128}
                height={128}
                className="rounded-full border-2 border-accent object-cover"
              />
              <div className="space-y-2">
                <p className="text-gray-400">$ whoami</p>
                <h1 className="text-cyanTech text-3xl font-bold">
                  <TypedText text={nameText} />
                </h1>
                <h2 className="text-solarTangerine">
                  <TypedText text={titleText} delay={70} />
                </h2>
                <div className="mt-3">
                  <h3 className="text-white text-lg font-bold gradient-text">
                    <TypedText text={headlineText} delay={50} />
                  </h3>
                </div>
              </div>
            </div>

            <p className="text-gray-400 mb-2">$ cat about-me.txt</p>
            <div className="text-gray-200 bg-code-bg p-4 rounded mb-6 leading-relaxed">
              <p>Engineer passionate about building modern, scalable applications and infrastructure across multiple platforms and technologies.</p>
              <p>Specializing in cloud architecture, microservice design, and event-driven systems - creating elegant solutions to complex problems.</p>
              <p className="mt-2 text-cyanTech">Open for speaking gigs and collaborations on quirky projects that make the world a bit more awesome! 🚀</p>
              <p>It&apos;s time to build something amazing!</p>
            </div>

            <p className="text-gray-400 mb-2">$ ls skills/</p>
            <div className="text-solarTangerine mb-6 flex flex-wrap gap-2">
              <span>.NET</span>
              <span>C#</span>
              <span>Azure</span>
              <span>AWS</span>
              <span>Kubernetes</span>
              <span>Docker</span>
              <span>React</span>
              <span>Node.js</span>
              <span>Python</span>
              <span>SQL</span>
              <span>Kafka</span>
              <span>Terraform</span>
              <span>Microservices</span>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent hover:bg-accent-hover text-white font-bold py-2 px-6 rounded-md transition-all"
              >
                Let's Chat!
              </motion.a>
              
              <motion.a
                href="#skills"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-cyanTech text-cyanTech hover:bg-cyanTech/10 font-bold py-2 px-6 rounded-md transition-all"
              >
                See My Skills
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg className="w-6 h-6 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
}
