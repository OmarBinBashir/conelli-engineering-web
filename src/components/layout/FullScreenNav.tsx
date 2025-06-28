"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface FullScreenNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const FullScreenNav: React.FC<FullScreenNavProps> = ({ isOpen, setIsOpen }) => {
  const navItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Group', 
      isHeading: true,
      children: [
        { label: 'About Us', href: '/group/about-us' },
        { label: 'Management', href: '/group/management' },
        { label: 'Products & Services', href: '/group/products-services' },
      ]
    },
    { label: 'Expertise', href: '/expertise' },
    { label: 'Project References', href: '/project-references' },
    { label: 'Innovation', href: '/innovation' },
    { label: 'Media', href: '/media' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: isOpen ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-0 bg-slate-900 text-white z-50 flex flex-col"
    >
      {/* Header with close button */}
      <div className="flex justify-between items-center p-6 border-b border-slate-700">
        <h2 className="text-2xl font-bold">Navigation</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 hover:bg-slate-800 rounded-full transition-colors"
          aria-label="Close navigation"
        >
          <X size={24} />
        </button>
      </div>

      {/* Navigation content */}
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-6 py-8">
          <nav>
            <ul className="space-y-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.isHeading ? (
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-slate-300">{item.label}</h3>
                      {item.children && (
                        <ul className="ml-4 space-y-3">
                          {item.children.map((child, childIndex) => (
                            <li key={childIndex}>
                              <Link
                                href={child.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg hover:text-slate-300 transition-colors block py-2"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xl hover:text-slate-300 transition-colors block py-2"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </motion.div>
  );
};

export default FullScreenNav;