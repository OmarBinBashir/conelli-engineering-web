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
      '/assets/project1-main.jpg',
      '/assets/project1-detail1.jpg',
      '/assets/project1-detail2.jpg',
      '/assets/project1-detail3.jpg',
      '/assets/project1-detail4.jpg',
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
      image: "/assets/testimonial1.jpg"
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
      '/assets/project2-main.jpg',
      '/assets/project2-detail1.jpg',
      '/assets/project2-detail2.jpg',
      '/assets/project2-detail3.jpg',
      '/assets/project2-detail4.jpg',
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
      image: "/assets/testimonial2.jpg"
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
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-6">Project Not Found</h1>
        <p className="mb-8">The project you're looking for does not exist or has been removed.</p>
        <Link 
          href="/projects" 
          className="bg-dark-gray text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all"
        >
          Return to Projects
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center bg-dark-gray">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            priority
            className="object-cover opacity-60"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-4xl">
            <span className="inline-block bg-white text-dark-gray px-3 py-1 rounded-full text-sm font-medium mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-sm uppercase text-gray-500 mb-1">Location</h3>
              <p className="font-semibold text-lg">{project.location}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase text-gray-500 mb-1">Completed</h3>
              <p className="font-semibold text-lg">{project.year}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase text-gray-500 mb-1">Client</h3>
              <p className="font-semibold text-lg">{project.client}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase text-gray-500 mb-1">Project Value</h3>
              <p className="font-semibold text-lg">{project.value}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Project Gallery</h2>
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg mb-8">{project.description}</p>
              
              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <ul className="space-y-2 mb-8">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-dark-gray mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-gray-100 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4">Challenge</h3>
                <p className="text-lg">{project.challenge}</p>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Solution</h3>
                <p className="text-lg">{project.solution}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 bg-dark-gray text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Sustainability Approach</h2>
          <p className="text-lg max-w-4xl">{project.sustainability}</p>
        </div>
      </section>

      {/* Client Testimonial */}
      {project.testimonial && (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
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
                  <h4 className="font-bold">{project.testimonial.author}</h4>
                  <p className="text-gray-600">{project.testimonial.position}</p>
                </div>
              </div>
              <blockquote className="text-xl italic">"{project.testimonial.quote}"</blockquote>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in a Similar Project?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Let's discuss how Conelli Engineering can help bring your project vision to life with our expertise 
            and proven track record of success.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact" 
              className="bg-dark-gray text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all"
            >
              Contact Us
            </Link>
            <Link 
              href="/projects" 
              className="border border-dark-gray text-dark-gray px-6 py-3 rounded-md font-medium hover:bg-dark-gray hover:text-white transition-all"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}