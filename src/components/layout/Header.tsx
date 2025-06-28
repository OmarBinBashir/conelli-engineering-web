"use client";

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Logo from '@/components/shared/Logo';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 sm:px-8">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:block">
          <Navbar />
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-800" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Navigation - Shown only on mobile when menu is open */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-transform duration-300 transform ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto py-4 px-6 sm:px-8">
          <Navbar isMobile={true} onLinkClick={() => setMobileMenuOpen(false)} />
        </div>
      </div>
    </header>
  );
};

export default Header;