import Image from 'next/image';
import Link from 'next/link';

// Mock data - in a real app this would come from a CMS or API
const projectData = {
  'lagos-corporate-tower': {
    title: 'Lagos Corporate Tower',
    category: 'Commercial',
    location: 'Lagos, Nigeria',
    year: '2022',
    client: 'Lagos Business Holdings Ltd',
    value: '₦5.2 billion',
    duration: '36 months',
    completed: true,
    description: 'A 25-story modern office building in the heart of Lagos business district featuring sustainable design principles and state-of-the-art facilities.',
    challenge: 'The site presented unique challenges due to its location in a congested urban area and the need to build a deep foundation in challenging soil conditions. Additionally, we had to ensure minimal disruption to surrounding businesses during the construction period.',
    solution: 'We implemented an innovative foundation design using piled raft technology to address soil stability concerns. Construction logistics were carefully planned with night-time deliveries and noise reduction measures. We also engaged closely with neighboring businesses to coordinate activities and minimize impact.',
    sustainability: 'The building integrates rainwater harvesting, solar panels covering 40% of energy needs, and a smart building management system that optimizes energy usage throughout the day.',
    images: [
      'https://placehold.co/800x600/e2e8f0/64748b?text=Lagos+Corporate+Tower+Main',
      'https://placehold.co/800x600/e2e8f0/64748b?text=Lagos+Corporate+Tower+Detail+1',
      'https://placehold.co/800x600/e2e8f0/64748b?text=Lagos+Corporate+Tower+Detail+2',
      'https://placehold.co/800x600/e2e8f0/64748b?text=Lagos+Corporate+Tower+Detail+3',
      'https://placehold.co/800x600/e2e8f0/64748b?text=Lagos+Corporate+Tower+Detail+4',
    ],
    features: [
      '25 floors of premium office space',
      '3-level underground parking for 200 vehicles',
      'Smart building technology integration',
      'LEED Gold certification',
      'Rooftop executive lounge and conference center',
      'High-speed elevator system'
    ],
    testimonial: {
      quote: "Conelli Engineering exceeded our expectations in delivering a world-class office tower that has become a landmark in Lagos. Their attention to detail and problem-solving abilities were impressive throughout the project.",
      author: "Oluwaseun Adeyemi",
      position: "CEO, Lagos Business Holdings Ltd",
      image: "https://placehold.co/150x150/e2e8f0/64748b?text=Client+Photo"
    }
  },
  'abuja-highway-expansion': {
    title: 'Abuja Highway Expansion',
    category: 'Infrastructure',
    location: 'Abuja, Nigeria',
    year: '2021',
    client: 'Federal Ministry of Works',
    value: '₦8.7 billion',
    duration: '24 months',
    completed: true,
    description: 'Major expansion of a 35km highway connecting key districts in the capital city, including widening from 4 to 8 lanes and constructing 3 new interchanges.',
    challenge: 'The project required maintaining traffic flow on a critical artery while performing major construction. Environmental concerns regarding nearby protected areas also needed to be addressed.',
    solution: 'We developed a phased construction approach that allowed traffic to continue flowing by keeping portions of the existing roadway operational. Environmental protection measures included creating wildlife crossings and implementing advanced stormwater management systems.',
    sustainability: 'The project incorporated LED lighting powered by solar panels, permeable pavement sections to reduce runoff, and native landscaping requiring minimal maintenance and water.',
    images: [
      'https://placehold.co/800x600/e2e8f0/64748b?text=Abuja+Highway+Main',
      'https://placehold.co/800x600/e2e8f0/64748b?text=Abuja+Highway+Detail+1',
      'https://placehold.co/800x600/e2e8f0/64748b?text=Abuja+Highway+Detail+2',
      'https://placehold.co/800x600/e2e8f0/64748b?text=Abuja+Highway+Detail+3',
      'https://placehold.co/800x600/e2e8f0/64748b?text=Abuja+Highway+Detail+4',
    ],
    features: [
      '35km of 8-lane highway',
      '3 new interchanges with flyovers',
      'Smart traffic management system',
      '12 pedestrian bridges',
      'Integrated drainage system',
      'Solar-powered street lighting'
    ],
    testimonial: {
      quote: "The highway expansion has significantly reduced travel time and congestion in Abuja. Conelli Engineering completed this complex project with minimal disruption to daily traffic, which was a major achievement.",
      author: "Dr. Ngozi Okonkwo",
      position: "Director, Federal Roads Authority",
      image: "https://placehold.co/150x150/e2e8f0/64748b?text=Client+Photo"
    }
  },
  // Add more projects as needed
};

// This would be replaced by dynamic data fetching in a real application
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = projectData[slug as keyof typeof projectData];

  // Fallback for projects not in our mock data
  if (!project) {
    return (
      <div className="container mx-auto px-6 sm:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6 text-slate-900">Project Not Found</h1>
        <p className="mb-8 text-slate-600">The project you're looking for does not exist or has been removed.</p>
        <Link 
          href="/project-references" 
          className="bg-slate-800 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-900 transition-all focus:ring-2 focus:ring-slate-500"
        >
          Return to Project References
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            priority
            className="object-cover opacity-60"
          />
        </div>
        <div className="container mx-auto px-6 sm:px-8 z-10 text-white">
          <div className="max-w-4xl">
            <span className="inline-block bg-white text-slate-900 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-slate-200">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-sm uppercase text-slate-500 mb-1">Location</h3>
              <p className="font-semibold text-lg text-slate-900">{project.location}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase text-slate-500 mb-1">Completed</h3>
              <p className="font-semibold text-lg text-slate-900">{project.year}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase text-slate-500 mb-1">Client</h3>
              <p className="font-semibold text-lg text-slate-900">{project.client}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase text-slate-500 mb-1">Project Value</h3>
              <p className="font-semibold text-lg text-slate-900">{project.value}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="container mx-auto px-6 sm:px-8">
          <h2 className="text-3xl font-bold mb-8 text-slate-900">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Project Overview</h2>
              <p className="text-lg mb-8 text-slate-600">{project.description}</p>
              
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Key Features</h3>
              <ul className="space-y-2 mb-8">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-slate-600 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-slate-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Challenge</h3>
                <p className="text-lg text-slate-600">{project.challenge}</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Solution</h3>
                <p className="text-lg text-slate-600">{project.solution}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white">
        <div className="container mx-auto px-6 sm:px-8">
          <h2 className="text-3xl font-bold mb-6">Sustainability Approach</h2>
          <p className="text-lg max-w-4xl text-slate-200">{project.sustainability}</p>
        </div>
      </section>

      {/* Client Testimonial */}
      {project.testimonial && (
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="container mx-auto px-6 sm:px-8">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image 
                    src={project.testimonial.image} 
                    alt={project.testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-slate-900">{project.testimonial.author}</h4>
                  <p className="text-slate-600">{project.testimonial.position}</p>
                </div>
              </div>
              <blockquote className="text-xl italic text-slate-700">"{project.testimonial.quote}"</blockquote>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 sm:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Interested in a Similar Project?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8 text-slate-600">
            Let's discuss how Conelli Engineering can help bring your project vision to life with our expertise 
            and proven track record of success.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-slate-800 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-900 transition-all focus:ring-2 focus:ring-slate-500"
            >
              Contact Us
            </Link>
            <Link 
              href="/project-references" 
              className="border border-slate-800 text-slate-800 px-6 py-3 rounded-md font-medium hover:bg-slate-800 hover:text-white transition-all focus:ring-2 focus:ring-slate-500"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}