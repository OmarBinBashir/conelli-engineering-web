"use client";

import React, { useState, useEffect } from 'react';
import Logo from '@/components/shared/Logo';
import SideNavigation from './SideNavigation';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <header 
        className={`sticky top-0 w-full relative z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8">
          {/* Logo */}
          <Logo />

          {/* Animated Burger/Close Menu Button */}
          <button 
            className="p-3 text-slate-800 hover:bg-slate-100 rounded-md transition-colors relative" 
            onClick={toggleMenu}
            aria-label={isNavOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <div className="w-6 h-6 relative">
              {/* Burger to X Animation */}
              <motion.span
                className="absolute left-0 top-1 w-6 h-0.5 bg-slate-800 rounded-full"
                animate={{
                  rotate: isNavOpen ? 45 : 0,
                  y: isNavOpen ? 8 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
              <motion.span
                className="absolute left-0 top-3 w-6 h-0.5 bg-slate-800 rounded-full"
                animate={{
                  opacity: isNavOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
              <motion.span
                className="absolute left-0 top-5 w-6 h-0.5 bg-slate-800 rounded-full"
                animate={{
                  rotate: isNavOpen ? -45 : 0,
                  y: isNavOpen ? -8 : 0,
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Side Navigation - Rendered conditionally from Header */}
      <SideNavigation isOpen={isNavOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default Header;