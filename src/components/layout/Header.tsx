"use client";

import React, { useState, useEffect } from 'react';
import Logo from '@/components/shared/Logo';
import FullScreenNav from './FullScreenNav';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
          scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 sm:px-8">
          {/* Logo */}
          <Logo />

          {/* Menu Button */}
          <button 
            className="p-2 text-slate-800 hover:bg-slate-100 rounded-md transition-colors" 
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Full Screen Navigation */}
      <FullScreenNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;