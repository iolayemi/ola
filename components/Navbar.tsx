'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const links = [
  { href: '#home',      label: '// home' },
  { href: '#skills',    label: '// expertise' },
  { href: '#projects',  label: '// projects' },
  { href: '#companies', label: '// experience' },
  { href: '#contact',   label: '// contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        'fixed top-0 inset-x-0 z-40 backdrop-blur transition-all duration-300 px-6 py-3',
        scrolled 
          ? 'bg-midnight/90 border-b border-gray-800 shadow-lg' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="font-mono text-xl text-cyanTech font-bold">
          <span className="text-solarTangerine">O</span>layemi
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-6 font-mono text-sm">
            {links.map(link => (
              <motion.li
                key={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={link.href} 
                  scroll={true}
                  className="text-gray-300 hover:text-cyanTech transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyanTech group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="md:hidden text-gray-300 focus:outline-none"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-terminal border-t border-gray-700 mt-3"
        >
          <ul className="py-2">
            {links.map(link => (
              <li key={link.href} className="px-6 py-2">
                <Link
                  href={link.href}
                  scroll={true}
                  className="block text-gray-300 hover:text-cyanTech"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
