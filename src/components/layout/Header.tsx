"use client";

import React, { useState, useEffect } from 'react';
import Logo from '@/components/shared/Logo';
import SideNavigation from './SideNavigation';
import { Menu } from 'lucide-react';

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

  return (
    <>
      <header 
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8">
          {/* Logo */}
          <Logo />

          {/* Burger Menu Button */}
          <button 
            className="p-3 text-slate-800 hover:bg-slate-100 rounded-md transition-colors" 
            onClick={() => setIsNavOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Side Navigation */}
      <SideNavigation isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
    </>
  );
};

export default Header;