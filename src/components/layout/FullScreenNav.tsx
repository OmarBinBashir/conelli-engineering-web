"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown } from 'lucide-react';

interface FullScreenNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const FullScreenNav: React.FC<FullScreenNavProps> = ({ isOpen, setIsOpen }) => {
  const [isGroupOpen, setIsGroupOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsGroupOpen(false);
  };

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: isOpen ? 0 : "-100%" }}
      transition={{ duration: 0.4, ease: [0.25, 0.25, 0.25, 0.75] }}
      className="fixed inset-0 bg-slate-900 text-white z-50 flex flex-col"
    >
      {/* Header with close button */}
      <div className="flex justify-between items-center p-8 border-b border-slate-700">
        <h2 className="text-2xl font-bold">Navigation</h2>
        <button
          onClick={() => setIsOpen(false)}
          className="p-3 hover:bg-slate-800 rounded-full transition-colors"
          aria-label="Close navigation"
        >
          <X size={24} />
        </button>
      </div>

      {/* Navigation content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <nav>
            <ul className="space-y-8">
              {/* Home */}
              <li>
                <Link
                  href="/"
                  onClick={handleLinkClick}
                  className="text-2xl font-medium hover:text-slate-300 transition-colors block py-3"
                >
                  Home
                </Link>
              </li>

              {/* Group - Accordion */}
              <li>
                <button
                  onClick={() => setIsGroupOpen(!isGroupOpen)}
                  className="flex items-center justify-between w-full text-2xl font-medium hover:text-slate-300 transition-colors py-3"
                >
                  <span>Group</span>
                  <motion.div
                    animate={{ rotate: isGroupOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isGroupOpen && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-6 mt-4 space-y-4 overflow-hidden"
                    >
                      <li>
                        <Link
                          href="/group/about-us"
                          onClick={handleLinkClick}
                          className="text-lg text-slate-300 hover:text-white transition-colors block py-2"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/group/management"
                          onClick={handleLinkClick}
                          className="text-lg text-slate-300 hover:text-white transition-colors block py-2"
                        >
                          Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/group/products-services"
                          onClick={handleLinkClick}
                          className="text-lg text-slate-300 hover:text-white transition-colors block py-2"
                        >
                          Products & Services
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Other main navigation items */}
              <li>
                <Link
                  href="/expertise"
                  onClick={handleLinkClick}
                  className="text-2xl font-medium hover:text-slate-300 transition-colors block py-3"
                >
                  Expertise
                </Link>
              </li>

              <li>
                <Link
                  href="/project-references"
                  onClick={handleLinkClick}
                  className="text-2xl font-medium hover:text-slate-300 transition-colors block py-3"
                >
                  Project References
                </Link>
              </li>

              <li>
                <Link
                  href="/innovation"
                  onClick={handleLinkClick}
                  className="text-2xl font-medium hover:text-slate-300 transition-colors block py-3"
                >
                  Innovation
                </Link>
              </li>

              <li>
                <Link
                  href="/media"
                  onClick={handleLinkClick}
                  className="text-2xl font-medium hover:text-slate-300 transition-colors block py-3"
                >
                  Media
                </Link>
              </li>

              <li>
                <Link
                  href="/sustainability"
                  onClick={handleLinkClick}
                  className="text-2xl font-medium hover:text-slate-300 transition-colors block py-3"
                >
                  Sustainability
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  onClick={handleLinkClick}
                  className="text-2xl font-medium hover:text-slate-300 transition-colors block py-3"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </motion.div>
  );
};

export default FullScreenNav;