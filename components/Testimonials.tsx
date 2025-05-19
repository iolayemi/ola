'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// More detailed testimonial data
const testimonials = [
  {
    quote: "Olayemi's DevOps insights saved us weeks of toil! The migration to Kubernetes was seamless and dramatically improved our deployment reliability.",
    name: "Sarah Johnson",
    title: "CTO, FinTech Innovations",
    image: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    quote: "Delivered 40% cost-reduction by containerizing our legacy stack. Additionally, the monitoring solutions implemented have given us unprecedented visibility into our systems.",
    name: "Michael Chang",
    title: "VP Engineering, CloudSys",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    quote: "A rare blend of systems thinking and UX empathy. Olayemi understands that DevOps isn't just about automation—it's about creating a development experience that empowers teams.",
    name: "Elena Petrov",
    title: "Product Lead, DevHub",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  
  // Handle manual navigation
  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="bg-midnight py-24">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-2xl mb-12">Testimonials</h2>
        
        <div className="max-w-5xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="relative bg-terminal border border-gray-700 rounded-lg p-8 shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                {/* Testimonial image */}
                <div className="w-24 h-24 md:w-32 md:h-32 shrink-0">
                  <img 
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="rounded-full border-2 border-accent object-cover w-full h-full"
                  />
                </div>
                
                <div>
                  {/* Quote icon */}
                  <svg className="w-10 h-10 text-gray-600 mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8v12H6v-8c0-2.21 1.79-4 4-4h2m14 0v12h-4v-8c0-2.21 1.79-4 4-4h2"></path>
                  </svg>
                  
                  {/* Quote */}
                  <blockquote className="text-gray-200 italic mb-4 leading-relaxed">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="mt-6">
                    <p className="font-bold text-cyanTech">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="text-solarTangerine text-sm">
                      {testimonials[activeIndex].title}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Indicator dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-cyanTech' : 'bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
