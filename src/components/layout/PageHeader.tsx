import React from 'react';
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  backgroundImageUrl: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, backgroundImageUrl }) => {
  return (
    <section className="relative py-24 flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImageUrl}
          alt={`${title} header background`}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/50"></div>
      </div>
      <div className="container mx-auto px-6 sm:px-8 z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
      </div>
    </section>
  );
};

export default PageHeader;