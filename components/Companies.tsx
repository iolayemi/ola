'use client';

import { motion } from 'framer-motion';

// Updated experience highlights focusing on companies without years
const experiences = [
  {
    company: 'Hootsuite',
    role: 'Senior DevOps Engineer',
    highlights: [
      'Led migration to containerized microservices architecture',
      'Implemented GitOps workflows and automated CI/CD pipelines'
    ],
    website: 'https://hootsuite.com'
  },
  {
    company: 'Access Bank',
    role: 'Cloud Solutions Architect',
    highlights: [
      'Designed hybrid cloud infrastructure supporting millions of customers',
      'Modernized legacy applications with container technologies'
    ],
    website: 'https://accessbankplc.com'
  }
];

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 50 } }
};

export function Companies() {
  return (
    <section id="companies" className="bg-surface py-24">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-2xl mb-12">Experience</h2>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Timeline */}
          <div className="relative border-l border-gray-700 ml-6 md:ml-8">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.company} 
                className="mb-12 ml-6 md:ml-8"
                variants={itemVariants}
              >
                {/* Timeline circle */}
                <div className="absolute w-4 h-4 rounded-full bg-cyanTech border-4 border-midnight -left-2" style={{top: `${index * 0.1 + 1.5}rem`}}></div>
                
                {/* Experience card */}
                <div className="card p-6 hover:border-cyanTech transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-lg font-mono text-cyanTech">{exp.role}</h3>
                      <div className="flex items-center gap-2">
                        <a 
                          href={exp.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-solarTangerine hover:underline"
                        >
                          {exp.company}
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="text-gray-300 mb-4 list-disc pl-5">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="mb-1">{highlight}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Resume link */}
        <div className="text-center mt-12">
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent border border-cyanTech text-cyanTech hover:bg-cyanTech/10 px-6 py-2 rounded-md transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
}
