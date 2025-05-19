'use client';

import { motion } from 'framer-motion';

// Updated categorized skills without emphasizing .NET
const skillCategories = [
  {
    category: 'Languages',
    skills: ['C#', 'JavaScript', 'TypeScript', 'Python', 'Go', 'Java', 'SQL', 'Bash']
  },
  {
    category: 'Frontend',
    skills: ['React', 'Angular', 'Vue', 'Next.js', 'TailwindCSS', 'Redux']
  },
  {
    category: 'Backend & APIs',
    skills: ['.NET Core', 'Node.js', 'Express.js', 'GraphQL', 'REST', 'FileMaker', 'ProcessMaker']
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'TSQL', 'MongoDB', 'DynamoDB', 'Redis']
  },
  {
    category: 'Cloud Platforms',
    skills: ['Azure', 'AWS (EC2, S3, Lambda, RDS)', 'GCP']
  },
  {
    category: 'DevOps & CI/CD',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Azure DevOps']
  },
  {
    category: 'Monitoring & Analytics',
    skills: ['Prometheus', 'Grafana', 'Datadog', 'Splunk', 'ELK Stack']
  },
  {
    category: 'Messaging & Streaming',
    skills: ['Kafka', 'Flink', 'RabbitMQ']
  }
];

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 50 } }
};

export function Skills() {
  return (
    <section id="skills" className="bg-surface py-24">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-2xl mb-12">Expertise</h2>
        
        {/* General expertise summary - without emphasizing .NET */}
        <motion.div
          className="mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gradient-1/20 to-gradient-2/20 p-6 rounded-lg border border-cyanTech/30">
            <h3 className="text-xl font-mono text-cyanTech mb-2">Technical Versatility</h3>
            <p className="text-text-secondary leading-relaxed">
              Versatile engineer with experience across multiple programming languages and frameworks including .NET Core, 
              focusing on building distributed systems and cloud-native applications. I enjoy crafting robust solutions 
              that solve complex business problems with elegant technical approaches.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {skillCategories.map(category => (
            <motion.div key={category.category} className="card p-6" variants={itemVariants}>
              <h3 className="text-lg font-mono text-cyanTech mb-4 border-b border-gray-700 pb-2">
                {category.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map(skill => (
                  <motion.span
                    key={skill}
                    className="font-mono text-gray-300 bg-code-bg border border-gray-700 rounded-md px-3 py-1 text-sm"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(124, 77, 255, 0.2)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-text-secondary leading-relaxed">
            My versatile technical background allows me to navigate complex challenges across the software development spectrum.
            I enjoy blending multiple technologies to create optimal solutions, from frontend interfaces to complex backend systems,
            and implementing scalable infrastructure across multiple cloud platforms.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
