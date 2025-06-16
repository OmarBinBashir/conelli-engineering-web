import Image from 'next/image';
import Link from 'next/link';

// This would normally be fetched from a CMS or API
const projects = [
  {
    slug: 'lagos-corporate-tower',
    title: 'Lagos Corporate Tower',
    category: 'Commercial',
    location: 'Lagos, Nigeria',
    year: '2022',
    image: '/assets/project1.jpg',
    description: 'A 25-story modern office building in the heart of Lagos business district.',
  },
  {
    slug: 'abuja-highway-expansion',
    title: 'Abuja Highway Expansion',
    category: 'Infrastructure',
    location: 'Abuja, Nigeria',
    year: '2021',
    image: '/assets/project2.jpg',
    description: 'Major expansion of a 35km highway connecting key districts in the capital city.',
  },
  {
    slug: 'port-harcourt-residential-complex',
    title: 'Port Harcourt Residential Complex',
    category: 'Residential',
    location: 'Port Harcourt, Nigeria',
    year: '2023',
    image: '/assets/project3.jpg',
    description: 'Luxury residential community featuring 120 apartments and modern amenities.',
  },
  {
    slug: 'kano-solar-power-plant',
    title: 'Kano Solar Power Plant',
    category: 'Industrial',
    location: 'Kano, Nigeria',
    year: '2020',
    image: '/assets/project4.jpg',
    description: 'A 50MW solar power facility providing clean energy to the Kano region.',
  },
  {
    slug: 'eko-atlantic-bridge',
    title: 'Eko Atlantic Bridge',
    category: 'Infrastructure',
    location: 'Lagos, Nigeria',
    year: '2022',
    image: '/assets/project5.jpg',
    description: 'Iconic suspension bridge connecting Eko Atlantic City to mainland Lagos.',
  },
  {
    slug: 'ibadan-shopping-mall',
    title: 'Ibadan Shopping Mall',
    category: 'Commercial',
    location: 'Ibadan, Nigeria',
    year: '2021',
    image: '/assets/project6.jpg',
    description: 'Modern retail center housing 75 stores and entertainment facilities.',
  },
  {
    slug: 'calabar-hospital',
    title: 'Calabar Medical Center',
    category: 'Healthcare',
    location: 'Calabar, Nigeria',
    year: '2023',
    image: '/assets/project7.jpg',
    description: 'State-of-the-art medical facility with 200 beds and specialized departments.',
  },
  {
    slug: 'ogun-manufacturing-plant',
    title: 'Ogun Manufacturing Plant',
    category: 'Industrial',
    location: 'Ogun State, Nigeria',
    year: '2020',
    image: '/assets/project8.jpg',
    description: 'Large-scale manufacturing facility for consumer goods production.',
  },
  {
    slug: 'lekki-gardens',
    title: 'Lekki Gardens Estate',
    category: 'Residential',
    location: 'Lagos, Nigeria',
    year: '2022',
    image: '/assets/project9.jpg',
    description: 'Gated community with 250 family homes and comprehensive amenities.',
  },
];

export default function ProjectsPage() {
  // In a real application, we would implement filtering functionality here
  // For now, we'll just display all projects

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center bg-dark-gray">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/projects-hero.jpg"
            alt="Conelli Engineering Projects"
            fill
            priority
            className="object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl max-w-3xl">
            Explore our portfolio of completed and ongoing engineering and construction projects across Nigeria.
          </p>
        </div>
      </section>

      {/* Filter Controls */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="font-medium">Filter by:</span>
              <select className="border rounded-md px-3 py-2 bg-white">
                <option value="">All Categories</option>
                <option value="commercial">Commercial</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="residential">Residential</option>
                <option value="industrial">Industrial</option>
                <option value="healthcare">Healthcare</option>
              </select>
              <select className="border rounded-md px-3 py-2 bg-white">
                <option value="">All Years</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="older">Earlier</option>
              </select>
              <select className="border rounded-md px-3 py-2 bg-white">
                <option value="">All Locations</option>
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
                <option value="port-harcourt">Port Harcourt</option>
                <option value="other">Other Locations</option>
              </select>
            </div>
            <div>
              <select className="border rounded-md px-3 py-2 bg-white">
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link 
                key={index} 
                href={`/projects/${project.slug}`} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-dark-gray text-white text-sm font-medium py-1 px-3 rounded-full">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {project.location}
                    <span className="mx-2">•</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {project.year}
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="text-dark-gray font-medium flex items-center">
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <nav className="inline-flex items-center">
              <button className="px-4 py-2 border rounded-l-md border-r-0 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 border bg-dark-gray text-white">1</button>
              <button className="px-4 py-2 border border-l-0 border-r-0 hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border border-l-0 border-r-0 hover:bg-gray-50">3</button>
              <button className="px-4 py-2 border rounded-r-md border-l-0 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-dark-gray text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Let's discuss how Conelli Engineering can help bring your vision to life with our expertise 
            and proven track record of successful projects.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-dark-gray px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-all"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}