import React from 'react';
import Link from 'next/link';
import { Building2, Road, Home, Landmark, Factory, ClipboardList } from 'lucide-react';

const ServiceHighlights: React.FC = () => {
  const services = [
    {
      id: 'infrastructure',
      title: 'Infrastructure Development',
      description: 'Design and construction of roads, bridges, water systems and other vital public infrastructure.',
      icon: <Road className="h-12 w-12 text-dark-gray mb-4" />,
    },
    {
      id: 'commercial',
      title: 'Commercial Construction',
      description: 'Building offices, retail spaces, hotels, and other commercial properties with modern design and functionality.',
      icon: <Building2 className="h-12 w-12 text-dark-gray mb-4" />,
    },
    {
      id: 'residential',
      title: 'Residential Projects',
      description: 'Creating comfortable, sustainable, and beautiful living spaces from single-family homes to apartment complexes.',
      icon: <Home className="h-12 w-12 text-dark-gray mb-4" />,
    },
    {
      id: 'real-estate',
      title: 'Real Estate Development',
      description: 'Full-service development from land acquisition and planning to construction and property management.',
      icon: <Landmark className="h-12 w-12 text-dark-gray mb-4" />,
    },
    {
      id: 'industrial',
      title: 'Industrial Facilities',
      description: 'Engineering and construction of factories, warehouses, and specialized industrial buildings.',
      icon: <Factory className="h-12 w-12 text-dark-gray mb-4" />,
    },
    {
      id: 'project-management',
      title: 'Project Management',
      description: 'Comprehensive oversight of construction projects from inception to completion, ensuring quality and efficiency.',
      icon: <ClipboardList className="h-12 w-12 text-dark-gray mb-4" />,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Conelli Engineering offers comprehensive services across the engineering and construction spectrum, 
            delivering excellence at every stage of project development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link 
                href={`/services#${service.id}`} 
                className="inline-block text-dark-gray font-medium hover:underline"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="bg-dark-gray text-white px-8 py-4 rounded-md font-medium hover:bg-gray-800 transition-all"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;