'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Enhanced case studies data
type Study = {
  id: number;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  technologies: string[];
  link: string;
  image: string;
};

const studies: Study[] = [
  {
    id: 1,
    title: 'Migrating 12B-row pipeline to serverless',
    summary: 'Reduced processing time 70% by refactoring to Azure Functions + Service Bus.',
    challenge: 'A financial services client faced escalating costs and scaling limitations with their monolithic data processing system handling 12B+ rows of transaction data daily.',
    solution: 'Designed an event-driven, serverless architecture using Azure Functions for processing and Azure Service Bus for message queuing. Implemented a staged migration strategy to minimize disruption.',
    outcome: 'Reduced processing time by 70% while cutting infrastructure costs by 45%. System now scales automatically with demand and provides real-time monitoring dashboards.',
    technologies: ['Azure Functions', 'Azure Service Bus', 'C#', '.NET Core', 'CosmosDB', 'Azure Monitoring'],
    link: '#',
    image: '/images/projects/case1.jpg'
  },
  {
    id: 2,
    title: 'Building HA Redis on K8s for multi-env',
    summary: 'Three-namespace isolation with Helm & Sentinel; 99.99% uptime.',
    challenge: 'A SaaS platform needed a high-availability Redis solution across multiple environments (dev, staging, production) with strong isolation guarantees and zero downtime failover.',
    solution: 'Implemented a Kubernetes-based Redis cluster using Helm charts with Sentinel for automatic failover. Created dedicated namespaces with resource quotas and network policies for isolation.',
    outcome: 'Achieved 99.99% uptime with automatic failover in under 3 seconds. Reduced operational overhead by 80% through standardized deployment across all environments.',
    technologies: ['Kubernetes', 'Helm', 'Redis', 'Sentinel', 'Prometheus', 'Grafana'],
    link: '#',
    image: '/images/projects/case2.jpg'
  },
  {
    id: 3,
    title: 'Real-time ML Inference API',
    summary: 'Deployed edge ML models with sub-100ms response for 500k daily API requests.',
    challenge: 'A retail client needed to deploy machine learning models for real-time recommendations with strict latency requirements (<100ms) and high throughput (500k+ requests daily).',
    solution: 'Created a distributed inference system using TensorRT optimized models, deployed on Kubernetes with autoscaling. Implemented Redis caching layer and efficient request batching.',
    outcome: 'Achieved 99th percentile latency of 87ms while handling 500k+ daily requests. System automatically scales under load and provides real-time monitoring.',
    technologies: ['PyTorch', 'TensorRT', 'Kubernetes', 'Redis', 'gRPC', 'Prometheus'],
    link: '#',
    image: '/images/projects/case3.jpg'
  }
];

export function CaseStudies() {
  const [expandedStudy, setExpandedStudy] = useState<number | null>(null);
  
  return (
    <section className="bg-midnight py-24">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-2xl mb-12">Case Studies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {studies.map(study => (
            <motion.div
              key={study.id}
              className="card overflow-hidden h-full flex flex-col"
              whileHover={{ y: -5 }}
              layout
            >
              {/* Study image */}
              <div className="relative h-48">
                <Image 
                  src={study.image} 
                  alt={study.title} 
                  layout="fill" 
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-mono text-cyanTech text-xl mb-2">
                  {study.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {study.summary}
                </p>
                
                {expandedStudy === study.id ? (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-4"
                  >
                    <div className="mb-3">
                      <h4 className="text-solarTangerine text-sm mb-1">Challenge:</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="text-solarTangerine text-sm mb-1">Solution:</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="text-solarTangerine text-sm mb-1">Outcome:</h4>
                      <p className="text-gray-300 text-sm">{study.outcome}</p>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className="text-solarTangerine text-sm mb-1">Technologies:</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {study.technologies.map(tech => (
                          <span key={tech} className="bg-code-bg text-xs px-2 py-1 rounded text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : null}
                
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => setExpandedStudy(expandedStudy === study.id ? null : study.id)}
                    className="text-cyanTech hover:text-solarTangerine transition-colors text-sm"
                  >
                    {expandedStudy === study.id ? 'Show less' : 'Read more'}
                  </button>
                  
                  <motion.a
                    href={study.link}
                    className="font-mono text-cyanTech hover:underline text-sm flex items-center gap-1"
                    whileHover={{ x: 3 }}
                  >
                    View Case
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
