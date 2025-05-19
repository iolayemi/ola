'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`);
    
    window.location.href = `mailto:olayemi.lasisi@outlook.com?subject=${subject}&body=${body}`;
    
    // Reset form after opening email client
    setFormState({ name: '', email: '', message: '' });
    setFormStatus('success');
    
    // Reset status after 3 seconds
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <footer id="contact" className="bg-terminal py-24 border-t border-gray-700">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-2xl mb-12">Contact</h2>
        
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="card p-8">
              <h3 className="font-mono text-cyanTech text-xl mb-6">Let&apos;s Connect!</h3>
              <p className="text-gray-300 mb-6">
                I&apos;m always open to discussing new projects, opportunities in software engineering,
                DevOps, or technology consulting.
              </p>
              
              <div className="bg-terminal border border-gray-700 rounded-lg p-5 mb-8">
                <p className="text-solarTangerine font-mono text-sm mb-2">$ echo "fun_fact.txt"</p>
                <div className="text-gray-300 bg-code-bg p-3 rounded">
                  <p className="mb-2">🎤 <span className="text-accent">I&apos;m available for speaking gigs!</span></p>
                  <p className="mb-2">💻 <span className="text-cyanTech">Open to collaborate on quirky & interesting projects</span></p>
                  <p>🚀 <span className="text-solarTangerine">Will work for good coffee and dad jokes</span></p>
                </div>
              </div>
              
              <div className="space-y-6">
                <a 
                  href="mailto:olayemi.lasisi@outlook.com" 
                  className="flex items-center gap-3 text-gray-200 hover:text-cyanTech transition-colors"
                >
                  <div className="bg-gradient-to-r from-accent/20 to-cyanTech/20 p-3 rounded-full">
                    <svg className="w-5 h-5 text-cyanTech" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <span>olayemi.lasisi@outlook.com</span>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/iolayemi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-200 hover:text-cyanTech transition-colors"
                >
                  <div className="bg-gradient-to-r from-accent/20 to-cyanTech/20 p-3 rounded-full">
                    <svg className="w-5 h-5 text-cyanTech" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <span>LinkedIn</span>
                </a>
                
                <a 
                  href="https://github.com/iolayemi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-200 hover:text-cyanTech transition-colors"
                >
                  <div className="bg-gradient-to-r from-accent/20 to-cyanTech/20 p-3 rounded-full">
                    <svg className="w-5 h-5 text-cyanTech" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="card p-8">
              <h3 className="font-mono text-cyanTech text-xl mb-6">Send me a message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 text-sm mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-code-bg border border-gray-700 rounded p-3 text-gray-200 focus:border-cyanTech focus:outline-none focus:ring-1 focus:ring-cyanTech"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-400 text-sm mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-code-bg border border-gray-700 rounded p-3 text-gray-200 focus:border-cyanTech focus:outline-none focus:ring-1 focus:ring-cyanTech"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-400 text-sm mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-code-bg border border-gray-700 rounded p-3 text-gray-200 focus:border-cyanTech focus:outline-none focus:ring-1 focus:ring-cyanTech resize-none"
                    placeholder="How can I help you? Or share your best dad joke!"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full flex justify-center items-center bg-accent hover:bg-accent-hover text-white font-bold py-3 px-6 rounded transition-colors disabled:opacity-70"
                >
                  {formStatus === 'idle' && 'Open Email Client'}
                  {formStatus === 'submitting' && (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  )}
                  {formStatus === 'success' && 'Email Client Opened!'}
                  {formStatus === 'error' && 'Error - Try Again'}
                </button>
                
                {/* Success message */}
                {formStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-500 text-center mt-4"
                  >
                    Email client opened! If nothing happened, please email me directly at olayemi.lasisi@outlook.com
                  </motion.div>
                )}
                
                {/* Error message */}
                {formStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-center"
                  >
                    Something went wrong. Please try emailing directly.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Olayemi Lasisi. All Rights Reserved.</p>
          <p className="mt-2 text-xs">
            Built with <span className="text-solarTangerine">❤</span> using Next.js and TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}
