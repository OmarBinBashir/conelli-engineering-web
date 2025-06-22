import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Define types for the navigation links
interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

// Define props for the Navbar component
interface NavbarProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

// NavLink component for individual navigation items
const NavLink: React.FC<NavLinkProps> = ({ href, label, isActive, onClick }) => {
  return (
    <Link
      href={href}
      className={cn(
        'text-base font-medium transition-colors hover:text-gray-500',
        isActive ? 'text-dark-gray' : 'text-gray-700'
      )}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

// Main Navbar component
const Navbar: React.FC<NavbarProps> = ({ isMobile = false, onLinkClick }) => {
  // Navigation links for the website
  // In a real application, we would use Next.js usePathname() hook to determine the active link
  const navLinks = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/about', key: 'about', label: 'About' },
    { href: '/services', key: 'services', label: 'Services' },
    { href: '/projects', key: 'projects', label: 'Projects' },
    { href: '/sustainability', key: 'sustainability', label: 'Sustainability' },
    { href: '/careers', key: 'careers', label: 'Careers' },
    { href: '/contact', key: 'contact', label: 'Contact' },
  ];

  // If mobile, display links vertically; otherwise, horizontally
  return (
    <nav>
      <ul className={cn(
        'flex items-center',
        isMobile ? 'flex-col space-y-4' : 'flex-row space-x-8'
      )}>
        {navLinks.map((link) => (
          <li key={link.key}>
            <NavLink
              href={link.href}
              label={link.label}
              onClick={onLinkClick}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;