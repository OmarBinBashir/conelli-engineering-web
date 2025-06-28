import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="flex flex-col items-center mr-3">
        <div className="w-8 h-1.5 bg-slate-800 mb-1 rounded-sm"></div>
        <div className="w-8 h-1.5 bg-slate-800 mb-1 rounded-sm"></div>
        <div className="w-8 h-1.5 bg-slate-800 rounded-sm"></div>
      </div>
      <div className="font-bold text-xl md:text-2xl text-slate-800">
        Conelli
      </div>
    </Link>
  );
};

export default Logo;