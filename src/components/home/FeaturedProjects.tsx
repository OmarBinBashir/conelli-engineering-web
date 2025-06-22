import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const FeaturedProjects: React.FC = () => {
  // This would typically come from a CMS or API in a real application
  const projects = [
    {
      id: 'lagos-corporate-tower',
      title: 'Lagos Corporate Tower',
      category: 'Commercial',
      location: 'Lagos, Nigeria',
      image: '/assets/project-1.jpg',
      description: 'A 25-story modern office building in the heart of Lagos business district featuring sustainable design principles and state-of-the-art facilities.'
    },
    {
      id: 'abuja-highway-expansion',
      title: 'Abuja Highway Expansion',
      category: 'Infrastructure',
      location: 'Abuja, Nigeria',
      image: '/assets/project-2.jpg',
      description: 'Major expansion of a 35km highway connecting key districts in the capital city, including widening from 4 to 8 lanes and constructing 3 new interchanges.'
    },
    {
      id: 'port-harcourt-residential',
      title: 'Green Living Residences',
      category: 'Residential',
      location: 'Port Harcourt, Nigeria',
      image: '/assets/project-3.jpg',
      description: 'Eco-friendly residential complex with 120 units, incorporating sustainable technologies, shared community spaces, and green landscaping.'
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl">
              Explore our most notable projects that showcase our expertise in engineering, 
              construction, and sustainable development.
            </p>
          </div>
          <Link 
            href="/projects" 
            className="mt-4 md:mt-0 inline-flex items-center text-dark-gray hover:underline font-medium"
          >
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link 
              href={`/projects/${project.id}`} 
              key={project.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 text-white">
                    <span className="inline-block bg-white text-dark-gray px-2 py-1 rounded-md text-sm font-medium mb-2">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-gray-600 mb-3">{project.location}</p>
                  </div>
                  <span className="bg-gray-100 p-2 rounded-full transform translate-y-0 group-hover:translate-y-1 transition-transform">
                    <ArrowRight className="h-5 w-5 text-dark-gray" />
                  </span>
                </div>
                <p className="text-gray-700">
                  {project.description.length > 120 
                    ? `${project.description.substring(0, 120)}...` 
                    : project.description
                  }
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;