import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-bg.jpg"
          alt="Conelli Engineering Projects"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-gray/80 to-dark-gray/40"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Building Nigeria's Future
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Innovative engineering solutions for infrastructure development, commercial construction, 
            and sustainable building projects across Nigeria and West Africa.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/project-references" 
              className="bg-white text-dark-gray px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-all"
            >
              View Our Projects
            </Link>
            <Link 
              href="/contact" 
              className="border border-white text-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-dark-gray transition-all"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { count: '25+', label: 'Years of Excellence' },
              { count: '250+', label: 'Completed Projects' },
              { count: '500+', label: 'Skilled Professionals' },
              { count: '15+', label: 'Industry Awards' },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/90 backdrop-blur-sm p-4 rounded-lg text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-dark-gray">{stat.count}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;