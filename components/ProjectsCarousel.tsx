'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// More detailed project information
const projects = [
  { 
    id: 1,
    title: 'HA Traefik + MetalLB', 
    description: 'High-Availability Kubernetes ingress solution using Traefik and MetalLB for load balancing in bare metal environments.',
    technologies: ['Kubernetes', 'Traefik', 'MetalLB', 'Helm', 'GitOps'],
    image: '/images/projects/project1.jpg',
    url: '#',
    githubUrl: 'https://github.com/iolayemi'
  },
  { 
    id: 2,
    title: 'LLM Fine-tuning Rig', 
    description: 'Custom pipeline for fine-tuning large language models on domain-specific data with distributed training capabilities.',
    technologies: ['PyTorch', 'CUDA', 'Hugging Face', 'Python', 'Docker'],
    image: '/images/projects/project2.jpg',
    url: '#',
    githubUrl: 'https://github.com/iolayemi'
  },
  { 
    id: 3,
    title: 'Azure DevOps IaC', 
    description: 'Infrastructure as Code templates and CI/CD pipelines for automating cloud deployments on Azure with security best practices.',
    technologies: ['Terraform', 'Azure', 'GitHub Actions', 'Bicep', 'PowerShell'],
    image: '/images/projects/project3.jpg',
    url: '#',
    githubUrl: 'https://github.com/iolayemi'
  },
  { 
    id: 4,
    title: 'Event-Driven Microservices', 
    description: 'Reference architecture for scalable, event-driven microservices with comprehensive observability and resilience patterns.',
    technologies: ['Kafka', 'Go', 'gRPC', 'Prometheus', 'Kubernetes'],
    image: '/images/projects/project4.jpg',
    url: '#',
    githubUrl: 'https://github.com/iolayemi'
  }
];

export function ProjectsCarousel() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  // Handle opening project details
  const openProject = (id: number) => {
    setSelectedProject(id);
  };
  
  // Handle closing project details
  const closeProject = () => {
    setSelectedProject(null);
  };
  
  return (
    <section id="projects" className="bg-midnight py-24">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-2xl mb-12">Featured Projects</h2>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="card overflow-hidden group cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => openProject(project.id)}
            >
              <div className="relative h-48">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  layout="fill" 
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="font-mono text-cyanTech text-xl mb-1">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="bg-code-bg text-xs px-2 py-1 rounded text-gray-300">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-code-bg text-xs px-2 py-1 rounded text-gray-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View all projects button */}
        <div className="text-center mt-12">
          <motion.a
            href="https://github.com/iolayemi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent border border-cyanTech text-cyanTech hover:bg-cyanTech/10 px-6 py-2 rounded-md transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </motion.a>
        </div>
        
        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-terminal max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
              >
                {/* Close button */}
                <div className="sticky top-0 bg-gray-800 p-4 flex justify-between items-center border-b border-gray-700">
                  <h3 className="font-mono text-cyanTech text-xl">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </h3>
                  <button
                    onClick={closeProject}
                    className="text-gray-400 hover:text-white"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
                
                {/* Project details */}
                {selectedProject && (
                  <div className="p-6">
                    <Image 
                      src={projects.find(p => p.id === selectedProject)?.image || '/images/default-placeholder.jpg'}
                      alt={projects.find(p => p.id === selectedProject)?.title || 'Default Title'}
                      layout="fill" 
                      objectFit="cover"
                      className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    
                    <p className="text-gray-300 mb-6">
                      {projects.find(p => p.id === selectedProject)?.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-solarTangerine mb-2 font-mono">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects.find(p => p.id === selectedProject)?.technologies.map(tech => (
                          <span key={tech} className="bg-code-bg text-sm px-3 py-1 rounded text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <motion.a
                        href={projects.find(p => p.id === selectedProject)?.url}
                        className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={projects.find(p => p.id === selectedProject)?.githubUrl}
                        className="border border-cyanTech text-cyanTech hover:bg-cyanTech/10 px-4 py-2 rounded flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                        </svg>
                        View Code
                      </motion.a>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
