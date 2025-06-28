import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function ServicesPage() {
  const services = [
    {
      id: 'infrastructure',
      title: 'Infrastructure Development',
      description: 'We design and build critical infrastructure that forms the backbone of community development and economic growth.',
      image: 'https://placehold.co/800x600/e2e8f0/64748b?text=Infrastructure+Development',
      features: [
        'Roads and highways',
        'Bridges and flyovers',
        'Water supply systems',
        'Drainage systems',
        'Public transportation infrastructure',
      ],
    },
    {
      id: 'commercial',
      title: 'Commercial Construction',
      description: 'From office towers to retail complexes, we create commercial spaces that combine functionality, aesthetics, and sustainability.',
      image: 'https://placehold.co/800x600/e2e8f0/64748b?text=Commercial+Construction',
      features: [
        'Office buildings',
        'Shopping centers',
        'Hotels and hospitality',
        'Healthcare facilities',
        'Educational institutions',
      ],
    },
    {
      id: 'residential',
      title: 'Residential Construction',
      description: 'We build quality homes and residential complexes that provide comfort, safety, and value to homeowners and residents.',
      image: 'https://placehold.co/800x600/e2e8f0/64748b?text=Residential+Construction',
      features: [
        'High-rise apartments',
        'Gated communities',
        'Custom luxury homes',
        'Affordable housing projects',
        'Renovations and extensions',
      ],
    },
    {
      id: 'real-estate',
      title: 'Real Estate Development',
      description: 'Our comprehensive approach to real estate development combines market insights with technical expertise to maximize property value.',
      image: 'https://placehold.co/800x600/e2e8f0/64748b?text=Real+Estate+Development',
      features: [
        'Land acquisition and due diligence',
        'Project conceptualization',
        'Financial modeling and feasibility studies',
        'Development management',
        'Marketing and sales strategy',
      ],
    },
    {
      id: 'industrial',
      title: 'Industrial Projects',
      description: 'We design and construct industrial facilities that optimize operational efficiency while meeting rigorous safety standards.',
      image: 'https://placehold.co/800x600/e2e8f0/64748b?text=Industrial+Projects',
      features: [
        'Manufacturing facilities',
        'Warehouses and logistics centers',
        'Oil and gas installations',
        'Power generation plants',
        'Mining infrastructure',
      ],
    },
    {
      id: 'manufacturing',
      title: 'Product Manufacturing',
      description: 'We manufacture high-quality construction products that meet international standards and enhance project efficiency.',
      image: 'https://placehold.co/800x600/e2e8f0/64748b?text=Product+Manufacturing',
      features: [
        'Driveover Concrete Cover Series',
        'Tilemaster T50',
        'Custom construction solutions',
        'Quality control and testing',
        'Technical support and training',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1600x900/e2e8f0/64748b?text=Our+Services+Banner"
            alt="Conelli Engineering Services banner image"
            fill
            priority
            className="object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-6 sm:px-8 z-10 text-white">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl max-w-3xl text-slate-200">
              Comprehensive engineering and construction services delivered with excellence and precision.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Overview */}
      <AnimatedSection>
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-6 sm:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Comprehensive Engineering Solutions</h2>
              <p className="text-lg max-w-3xl mx-auto text-slate-600">
                Conelli Engineering offers end-to-end services from project conceptualization and design to 
                construction and handover. Our integrated approach ensures seamless project execution.
              </p>
            </div>
            
            {/* Service Categories */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={`#${service.id}`}
                  className="bg-slate-50 hover:bg-slate-800 hover:text-white text-center py-4 px-2 rounded-md transition-colors text-sm text-slate-800"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Detailed Services */}
      {services.map((service, index) => (
        <AnimatedSection key={index}>
          <section 
            id={service.id} 
            className={`py-20 lg:py-28 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
          >
            <div className="container mx-auto px-6 sm:px-8">
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={`An image representing ${service.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h2 className="text-3xl font-bold mb-6 text-slate-900">{service.title}</h2>
                  <p className="text-lg mb-6 text-slate-600">{service.description}</p>
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">Key Services:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <svg className="h-6 w-6 text-slate-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      ))}

      {/* Our Approach */}
      <AnimatedSection>
        <section className="py-20 lg:py-28 bg-slate-900 text-white">
          <div className="container mx-auto px-6 sm:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Approach</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: 'Discovery',
                  description: 'We begin by understanding your needs, challenges, and vision for the project.',
                  icon: '🔍',
                },
                {
                  step: 'Design',
                  description: 'Our engineers and architects create detailed plans that align with your goals and budget.',
                  icon: '✏️',
                },
                {
                  step: 'Development',
                  description: 'We execute the plan with precision, keeping you informed at every stage.',
                  icon: '🏗️',
                },
                {
                  step: 'Delivery',
                  description: 'The completed project is handed over, meeting or exceeding agreed specifications.',
                  icon: '✓',
                },
              ].map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-slate-800/50 p-6 rounded-lg text-center relative">
                    <span className="text-4xl mb-4 inline-block">{item.icon}</span>
                    <h3 className="text-xl font-bold mb-3">{item.step}</h3>
                    <p className="text-slate-200">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection>
        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-6 sm:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Ready to Start Your Project?</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8 text-slate-600">
              Contact us today to discuss how Conelli Engineering can help bring your vision to life with 
              our comprehensive engineering and construction services.
            </p>
            <Link 
              href="/contact" 
              className="bg-slate-800 text-white px-8 py-4 rounded-md font-medium hover:bg-slate-900 transition-all focus:ring-2 focus:ring-slate-500"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}