"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronRight } from 'lucide-react';

interface SideNavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const SideNavigation: React.FC<SideNavigationProps> = ({ isOpen, setIsOpen }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setExpandedSections([]);
  };

  const navigationItems = [
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Side Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ 
              type: 'spring',
              damping: 25,
              stiffness: 200,
              duration: 0.4
            }}
            className="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">Navigation</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                aria-label="Close navigation"
              >
                <X size={20} className="text-slate-600" />
              </button>
            </div>

            {/* Navigation Content */}
            <nav className="p-6">
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.title}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleSection(item.key!)}
                          className="flex items-center justify-between w-full text-left py-3 px-4 text-slate-800 hover:bg-slate-50 rounded-md transition-colors font-medium"
                        >
                          <span>{item.title}</span>
                          <motion.div
                            animate={{ 
                              rotate: expandedSections.includes(item.key!) ? 90 : 0 
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight size={16} className="text-slate-500" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {expandedSections.includes(item.key!) && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="ml-4 mt-2 space-y-1 overflow-hidden"
                            >
                              {item.children.map((child) => (
                                <li key={child.title}>
                                  <Link
                                    href={child.href}
                                    onClick={handleLinkClick}
                                    className="block py-2 px-4 text-slate-600 hover:text-slate-800 hover:bg-slate-50 rounded-md transition-colors"
                                  >
                                    {child.title}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href!}
                        onClick={handleLinkClick}
                        className="block py-3 px-4 text-slate-800 hover:bg-slate-50 rounded-md transition-colors font-medium"
                      >
                        {item.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-slate-200 mt-auto">
              <div className="text-sm text-slate-500">
                <p className="mb-2">Conelli Engineering Limited</p>
                <p>Building Nigeria's Future</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SideNavigation;