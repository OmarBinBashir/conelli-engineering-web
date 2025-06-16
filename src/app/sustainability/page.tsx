"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function SustainabilityPage() {
  const initiatives = [
    {
      title: 'Sustainable Design Practices',
      description: 'We incorporate passive design strategies, energy-efficient systems, and sustainable materials in all our projects to minimize environmental impact.',
      icon: '🌿',
      details: [
        'Solar orientation optimization',
        'Natural ventilation integration',
        'Locally sourced materials',
        'Energy modeling for efficiency'
      ]
    },
    {
      title: 'Green Building Certification',
      description: 'We help clients achieve recognized sustainability certifications that validate environmental performance and create healthier spaces.',
      icon: '🏆',
      details: [
        'LEED certification expertise',
        'EDGE certification guidance',
        'Green Star rating support',
        'Net Zero Carbon building design'
      ]
    },
    {
      title: 'Waste Reduction & Management',
      description: 'Our construction processes prioritize waste minimization, recycling, and responsible disposal of materials.',
      icon: '♻️',
      details: [
        'Construction waste recycling',
        'Prefabrication to reduce waste',
        'Digital documentation to minimize paper',
        'Material reuse strategies'
      ]
    },
    {
      title: 'Water Conservation',
      description: 'We design systems that reduce water consumption and enable water recycling in our projects.',
      icon: '💧',
      details: [
        'Rainwater harvesting systems',
        'Greywater recycling',
        'Water-efficient fixtures',
        'Drought-resistant landscaping'
      ]
    },
    {
      title: 'Carbon Reduction',
      description: "We're committed to reducing the carbon footprint of our projects through smart design and material choices.",
      icon: '🌡️',
      details: [
        'Low-carbon concrete formulations',
        'Embodied carbon assessment',
        'Renewable energy integration',
        'Electric vehicle infrastructure'
      ]
    },
    {
      title: 'Biodiversity Protection',
      description: 'Our projects consider local ecosystems and incorporate measures to protect and enhance biodiversity.',
      icon: '🦋',
      details: [
        'Site ecology assessment',
        'Native planting schemes',
        'Wildlife corridors and habitats',
        'Minimized site disturbance'
      ]
    }
  ];

  const projects = [
    {
      title: 'Lagos Solar Office Complex',
      description: 'A commercial building generating 60% of its energy needs from integrated solar systems, featuring rainwater harvesting and natural ventilation.',
      image: '/assets/sustainable-project-1.jpg',
      achievements: [
        '60% energy self-generation',
        'LEED Gold certification',
        '40% reduced water consumption',
        'Zero waste construction approach'
      ]
    },
    {
      title: 'Abuja Green Residential Community',
      description: 'A residential development designed with passive cooling, community gardens, and sustainable waste management systems.',
      image: '/assets/sustainable-project-2.jpg',
      achievements: [
        'EDGE Advanced certification',
        'Community composting program',
        'Shared electric vehicle stations',
        'Rainwater irrigation systems'
      ]
    }
  ];

  const goals = [
    {
      goal: 'Carbon Neutral Operations',
      description: 'Achieve carbon neutrality in our operations through renewable energy use and carbon offset programs.',
      progress: '35% Complete',
      progressValue: 35
    },
    {
      goal: 'Zero Waste to Landfill',
      description: 'Implement comprehensive waste reduction and recycling programs to eliminate landfill waste from our projects.',
      progress: '60% Complete',
      progressValue: 60
    },
    {
      goal: 'Water Positive Projects',
      description: 'Design projects that contribute more clean water to communities than they consume through recycling and treatment.',
      progress: '25% Complete',
      progressValue: 25
    }
  ];

  const foundationInitiatives = [
    {
      title: 'Education Support',
      description: 'Scholarships and educational infrastructure development for underprivileged communities.',
      icon: '📚'
    },
    {
      title: 'Community Development',
      description: 'Sustainable infrastructure projects that improve quality of life in local communities.',
      icon: '🏘️'
    },
    {
      title: 'Emergency Relief',
      description: 'Rapid response assistance for communities affected by natural disasters or crises.',
      icon: '🆘'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center bg-dark-gray">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/sustainability-hero.jpg"
            alt="Sustainability at Conelli Engineering"
            fill
            priority
            className="object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sustainability</h1>
          <p className="text-xl max-w-3xl">
            Our commitment to environmental stewardship, social responsibility, and sustainable engineering practices.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Sustainability Vision</h2>
            <p className="text-lg mb-6">
              At Conelli Engineering, sustainability isn't just a buzzword—it's a fundamental principle that guides our operations, 
              designs, and project execution. We believe that responsible engineering is about creating structures and systems that not only serve 
              present needs but also preserve resources and opportunities for future generations.
            </p>
            <p className="text-lg">
              Our approach integrates environmental considerations, social impact, and economic viability to deliver projects that stand 
              the test of time while minimizing ecological footprint.
            </p>
          </div>
        </div>
      </section>

      {/* Environmental Initiatives */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Environmental Initiatives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow">
                <span className="text-4xl mb-4 block">{initiative.icon}</span>
                <h3 className="text-xl font-bold mb-4">{initiative.title}</h3>
                <p className="mb-4">{initiative.description}</p>
                <h4 className="font-medium mb-2">Key Components:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {initiative.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-700">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Projects Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Sustainable Project Highlights</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-full rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="mb-6">{project.description}</p>
                  <h4 className="font-semibold mb-3">Sustainability Achievements:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, aIndex) => (
                      <li key={aIndex} className="flex items-start">
                        <svg className="h-6 w-6 text-green-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Engagement */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Community Engagement</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6">Local Impact Programs</h3>
              <p className="text-lg mb-6">
                We believe in contributing positively to the communities where we work. Our projects create both direct 
                employment and indirect economic benefits, while our community programs focus on lasting social impact.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-dark-gray rounded-full p-2 mt-1 mr-4">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Local Workforce Development</h4>
                    <p>We prioritize hiring from local communities and provide skills training that creates lasting employment opportunities.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-dark-gray rounded-full p-2 mt-1 mr-4">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Engineering Education</h4>
                    <p>Our scholarship program supports Nigerian students pursuing engineering degrees, with internship opportunities at Conelli.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-dark-gray rounded-full p-2 mt-1 mr-4">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Infrastructure Improvement</h4>
                    <p>Beyond our commercial projects, we contribute to community infrastructure improvements in underserved areas.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/assets/community-1.jpg"
                  alt="Community Training Program"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/assets/community-2.jpg"
                  alt="Engineering Scholarship Recipients"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/assets/community-3.jpg"
                  alt="Community Infrastructure Project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/assets/community-4.jpg"
                  alt="Local Employment Initiative"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="py-16 bg-dark-gray text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our 2030 Sustainability Goals</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <div key={index} className="bg-gray-800/50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">{goal.goal}</h3>
                <p className="mb-6">{goal.description}</p>
                <div className="mb-2 flex justify-between">
                  <span className="text-sm">{goal.progress}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-white h-2.5 rounded-full" 
                    style={{ width: `${goal.progressValue}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Conelli Foundation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">The Conelli Foundation</h2>
            <p className="text-lg mb-6">
              This is an independent private philanthropic organisation initiated by our Founder Abdulkadir Abdullahi. 
              The foundation has committed to sustainable community development projects. Conelli Foundation focuses on 
              providing assistance to people in critical need, supporting education initiatives, and promoting sustainable 
              development in communities across Nigeria.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {foundationInitiatives.map((initiative, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg text-center">
                  <span className="text-4xl mb-4 block">{initiative.icon}</span>
                  <h3 className="text-xl font-bold mb-3">{initiative.title}</h3>
                  <p className="text-gray-700">{initiative.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Partner With Us for Sustainable Development</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Let Conelli Engineering help you achieve your sustainability goals with innovative design and construction 
            solutions that make a positive impact on the environment and communities.
          </p>
          <Link 
            href="/contact" 
            className="bg-dark-gray text-white px-8 py-4 rounded-md font-medium hover:bg-gray-800 transition-all"
          >
            Contact Our Sustainability Team
          </Link>
        </div>
      </section>
    </div>
  );
} 