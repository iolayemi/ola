'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { getMediumPosts } from '@/lib/getMediumPosts';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } }
};

// Sample blog posts as fallback
const samplePosts = [
  {
    title: "Building Scalable Microservices with Kubernetes and gRPC",
    link: "https://medium.com/@i.am.ola"
  },
  {
    title: "Advanced DevOps Patterns for Cloud-Native Applications",
    link: "https://medium.com/@i.am.ola"
  },
  {
    title: "Fine-tuning LLMs for Domain-Specific Knowledge Work",
    link: "https://medium.com/@i.am.ola"
  }
];

export function BlogStrip() {
  const [blogPosts, setBlogPosts] = useState(samplePosts);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        const posts = await getMediumPosts('i.am.ola', 3);
        console.log('Fetched Medium posts:', JSON.stringify(posts, null, 2)); // Debugging log
        if (posts && posts.length > 0) {
          // Filter out posts with undefined title or link
          const validPosts = posts.filter(post => post.title && post.link).map(post => ({
            title: post.title || '',
            link: post.link || ''
          }));
          console.log('Valid Medium posts:', validPosts); // Debugging log
          setBlogPosts(validPosts);
        }
      } catch (error) {
        console.error('Failed to fetch Medium posts:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadPosts();
  }, []);

  return (
    <section className="bg-surface py-24">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="section-heading text-2xl">Latest Articles</h2>
          
          <motion.a
            href="https://medium.com/@i.am.ola"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyanTech hover:text-solarTangerine flex items-center gap-1 font-mono text-sm"
            whileHover={{ x: 3 }}
          >
            All articles
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </motion.a>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {isLoading ? (
            // Loading state placeholders
            Array(3).fill(null).map((_, i) => (
              <div key={i} className="card animate-pulse">
                <div className="p-6 h-full">
                  <div className="h-4 bg-gray-700 rounded mb-4"></div>
                  <div className="h-8 bg-gray-800 rounded mb-2"></div>
                  <div className="h-8 bg-gray-800 rounded mb-6"></div>
                  <div className="h-4 w-24 bg-gray-700 rounded"></div>
                </div>
              </div>
            ))
          ) : (
            blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                variants={itemVariants} 
                className="card group h-full"
                whileHover={{ y: -5 }}
              >
                <Link 
                  href={post.link || '#'} 
                  target="_blank"
                  className="block p-6 h-full"
                >
                  <div className="bg-gradient-to-r from-cyanTech/20 to-accent/20 p-1 rounded mb-4">
                    <div className="bg-terminal p-2 rounded flex items-center">
                      <svg className="w-5 h-5 text-cyanTech mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                      </svg>
                      <span className="text-xs text-gray-400">blog post {index + 1}</span>
                    </div>
                  </div>

                  <h3 className="font-mono text-cyanTech text-lg mb-3 group-hover:text-solarTangerine transition-colors">
                    {post.title}
                  </h3>
                  
                  <div className="flex items-center mt-6 text-gray-400 text-sm">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                    Read article
                  </div>
                </Link>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
}
