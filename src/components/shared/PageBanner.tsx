import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  backgroundImage?: string;
  imageAlt?: string;
  contentAlignment?: 'left' | 'center' | 'right';
  overlayOpacity?: 'light' | 'medium' | 'dark';
  height?: 'small' | 'medium' | 'large';
}

const PageBanner: React.FC<PageBannerProps> = ({
  title,
  description,
  breadcrumbs,
  backgroundImage = '/assets/page-banner-default.jpg',
  imageAlt = 'Page banner',
  contentAlignment = 'left',
  overlayOpacity = 'medium',
  height = 'medium',
}) => {
  // Determine overlay class based on opacity prop
  const overlayClass = {
    light: 'bg-dark-gray/40',
    medium: 'bg-dark-gray/60',
    dark: 'bg-dark-gray/80',
  }[overlayOpacity];

  // Determine height class based on height prop
  const heightClass = {
    small: 'h-[30vh]',
    medium: 'h-[40vh]',
    large: 'h-[50vh]',
  }[height];

  // Determine content alignment classes
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }[contentAlignment];

  const contentMaxWidth = contentAlignment === 'center' ? 'max-w-3xl' : 'max-w-2xl';

  return (
    <section className={`relative ${heightClass} flex items-center`}>
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
        />
        <div className={`absolute inset-0 ${overlayClass}`}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative text-white">
        <div className={`${contentMaxWidth} ${alignmentClass}`}>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="mb-4">
              <ol className="flex flex-wrap items-center text-sm">
                <li className="flex items-center">
                  <Link href="/" className="hover:text-gray-300 transition-colors">
                    Home
                  </Link>
                  <ChevronRight className="h-4 w-4 mx-2" />
                </li>
                {breadcrumbs.map((item, index) => {
                  const isLast = index === breadcrumbs.length - 1;
                  return (
                    <li key={index} className="flex items-center">
                      {item.href && !isLast ? (
                        <>
                          <Link href={item.href} className="hover:text-gray-300 transition-colors">
                            {item.label}
                          </Link>
                          <ChevronRight className="h-4 w-4 mx-2" />
                        </>
                      ) : (
                        <span className="font-medium">{item.label}</span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          
          {description && (
            <p className="text-lg md:text-xl text-white/90">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageBanner;