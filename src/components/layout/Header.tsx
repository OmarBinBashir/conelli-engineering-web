"use client";

import React, { useState } from 'react';
import Logo from '@/components/shared/Logo';
import SideNavigation from './SideNavigation';
import { motion } from 'framer-motion';
import { Mail, Search } from 'lucide-react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <header 
        className="sticky top-0 z-50 w-full bg-white shadow-md h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <Logo />

        {/* Right-side icons and menu */}
        <div className="flex items-center gap-6">
          {/* Email Icon */}
          <a href="mailto:info@conelliengineering.com" aria-label="Email">
            <Mail className="w-6 h-6 text-slate-800 hover:text-slate-600 transition-colors" />
          </a>
          {/* Search Icon */}
          <Link href="/search" aria-label="Search">
            <Search className="w-6 h-6 text-slate-800 hover:text-slate-600 transition-colors" />
          </Link>
          {/* Burger/Close Menu Button */}
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