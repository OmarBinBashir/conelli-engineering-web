"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft } from 'lucide-react';

interface SideNavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface NavigationItem {
  title: string;
  href?: string;
  key?: string;
  children?: { title: string; href: string }[];
}

const SideNavigation: React.FC<SideNavigationProps> = ({ isOpen, setIsOpen }) => {
  const [currentView, setCurrentView] = useState<'main' | string>('main');
  const [viewHistory, setViewHistory] = useState<string[]>(['main']);

  const navigationItems: NavigationItem[] = [
    {
      title: 'About Conelli Engineering',
      key: 'about',
      children: [
        { title: 'Profile & History', href: '/group/profile-history' },
        { title: 'Values', href: '/group/values' },
        { title: 'Management', href: '/group/management' },
        { title: 'Resources', href: '/group/products-services' },
      ]
    },
    {
      title: 'Expertise',
      key: 'expertise',
      children: [
        { title: 'Core Competencies', href: '/expertise' },
        { title: 'Buildings', href: '/expertise#buildings' },
        { title: 'Industry', href: '/expertise#industry' },
        { title: 'Infrastructure', href: '/expertise#infrastructure' },
        { title: 'Facilities Management', href: '/expertise#facilities' },
      ]
    },
    { title: 'Project References', href: '/project-references' },
    { title: 'Products & Services', href: '/group/products-services' },
    { title: 'Innovation', href: '/innovation' },
    { title: 'Media', href: '/media' },
    { title: 'Sustainability', href: '/sustainability' },
    { title: 'Contact', href: '/contact' },
  ];

  const handleDrillDown = (key: string) => {
    setCurrentView(key);
    setViewHistory(prev => [...prev, key]);
  };

  const handleBack = () => {
    const newHistory = viewHistory.slice(0, -1);
    setViewHistory(newHistory);
    setCurrentView(newHistory[newHistory.length - 1] || 'main');
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setCurrentView('main');
    setViewHistory(['main']);
  };

  const getCurrentItems = () => {
    if (currentView === 'main') {
      return navigationItems;
    }
    const parentItem = navigationItems.find(item => item.key === currentView);
    return parentItem?.children || [];
  };

  const getCurrentTitle = () => {
    if (currentView === 'main') return null;
    const parentItem = navigationItems.find(item => item.key === currentView);
    return parentItem?.title;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Covers entire viewport including header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Side Panel - Positioned below header with responsive width */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ 
              type: 'spring',
              damping: 25,
              stiffness: 200,
              duration: 0.4
            }}
            className="fixed top-20 right-0 h-[calc(100vh-5rem)] w-4/5 md:w-2/5 bg-white shadow-2xl z-50 overflow-hidden"
          >
            {/* Close Button - Top Right */}
            <div className="absolute top-6 right-6 z-10">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Close navigation"
              >
                <X size={20} className="text-slate-600" />
              </button>
            </div>

            {/* Navigation Content Container */}
            <div className="h-full overflow-y-auto scrollbar-hide">
              <div className="pt-16 pb-6">
                {/* Main Menu View */}
                <AnimatePresence mode="wait">
                  {currentView === 'main' ? (
                    <motion.div
                      key="main"
                      initial={{ x: 0 }}
                      animate={{ x: 0 }}
                      exit={{ x: '-100%' }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="px-8"
                    >
                      <nav>
                        <ul className="space-y-3">
                          {navigationItems.map((item) => (
                            <li key={item.title}>
                              {item.children ? (
                                <button
                                  onClick={() => handleDrillDown(item.key!)}
                                  className="flex items-center justify-between w-full text-left py-4 px-6 text-slate-800 hover:bg-slate-50 rounded-md transition-colors font-medium text-lg"
                                >
                                  <span>{item.title}</span>
                                  <svg 
                                    className="w-5 h-5 text-slate-400" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                  >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                </button>
                              ) : (
                                <Link
                                  href={item.href!}
                                  onClick={handleLinkClick}
                                  className="block py-4 px-6 text-slate-800 hover:bg-slate-50 rounded-md transition-colors font-medium text-lg"
                                >
                                  {item.title}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={currentView}
                      initial={{ x: '100%' }}
                      animate={{ x: 0 }}
                      exit={{ x: '100%' }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="px-8"
                    >
                      {/* Back Button */}
                      <div className="mb-8">
                        <button
                          onClick={handleBack}
                          className="flex items-center text-slate-600 hover:text-slate-800 transition-colors py-3"
                        >
                          <ArrowLeft size={20} className="mr-3" />
                          <span className="font-medium">Back</span>
                        </button>
                      </div>

                      {/* Sub-menu Title */}
                      <div className="mb-8">
                        <h3 className="text-xl font-bold text-slate-900">
                          {getCurrentTitle()}
                        </h3>
                      </div>

                      {/* Sub-menu Items */}
                      <nav>
                        <ul className="space-y-3">
                          {getCurrentItems().map((item: any) => (
                            <li key={item.title}>
                              <Link
                                href={item.href}
                                onClick={handleLinkClick}
                                className="block py-4 px-6 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
                              >
                                {item.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="px-8 py-6 border-t border-slate-200 mt-auto">
                <div className="text-sm text-slate-500">
                  <p className="mb-1 font-medium">Conelli Engineering Limited</p>
                  <p>Building Nigeria's Future</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideNavigation;