import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/shared/AnimatedSection';

// This would normally be fetched from a CMS or API
const projects = [
  {
    slug: 'lagos-corporate-tower',
    title: 'Lagos Corporate Tower',
    category: 'Commercial',
    location: 'Lagos, Nigeria',
    year: '2022',
    image: 'https://placehold.co/800x600/e2e8f0/64748b?text=Lagos+Corporate+Tower',
    description: 'A 25-story modern office building in the heart of Lagos business district.',
  },
  {
    slug: 'abuja-highway-expansion',
    title: 'Abuja Highway Expansion',
    category: 'Infrastructure',
    location: 'Abuja, Nigeria',
    year: '2021',
    image: 'https://placehold.co/800x600/e2e8f0/64748b?text=Abuja+Highway+Expansion',
    description: 'Major expansion of a 35km highway connecting key districts in the capital city.',
  },
  {
    slug: 'port-harcourt-residential-complex',
    title: 'Port Harcourt Residential Complex',
    category: 'Residential',
    location: 'Port Harcourt, Nigeria',
    year: '2023',
    image: 'https://placehold.co/800x600/e2e8f0/64748b?text=Port+Harcourt+Residential',
    description: 'Luxury residential community featuring 120 apartments and modern amenities.',
  },
  {
    slug: 'kano-solar-power-plant',
    title: 'Kano Solar Power Plant',
    category: 'Industrial',
    location: 'Kano, Nigeria',
    year: '2020',
    image: 'https://placehold.co/800x600/e2e8f0/64748b?text=Kano+Solar+Power+Plant',
    description: 'A 50MW solar power facility providing clean energy to the Kano region.',
  },
  {
    slug: 'eko-atlantic-bridge',
    title: 'Eko Atlantic Bridge',
    category: 'Infrastructure',
    location: 'Lagos, Nigeria',
    year: '2022',
    image: 'https://placehold.co/800x600/e2e8f0/64748b?text=Eko+Atlantic+Bridge',
    description: 'Iconic suspension bridge connecting Eko Atlantic City to mainland Lagos.',
  },
  {
    slug: 'ibadan-shopping-mall',
    title: 'Ibadan Shopping Mall',
    category: 'Commercial',
    location: 'Ibadan, Nigeria',
    year: '2021',
    image: 'https://placehold.co/800x600/e2e8f0/64748b?text=Ibadan+Shopping+Mall',
    description: 'Modern retail center housing 75 stores and entertainment facilities.',
  },
  {
    slug: 'calabar-hospital',
    title: 'Calabar Medical Center',
    category: 'Healthcare',
    location: 'Calabar, Nigeria',
    year: '2023',
    image: 'https://placehold.co/800x600/e2e8f0/64748b?text=Calabar+Medical+Center',
    description: 'State-of-the-art medical facility with 200 beds and specialized departments.',
  },
  {
    slug: 'ogun-manufacturing-plant',
    title: 'Ogun Manufacturing Plant',
    category: 'Industrial',
    location: 'Ogun State, Nigeria',
    year: '2020',
    image: 'https://placehold.co/800x600/e2e8f0/64748b?text=Ogun+Manufacturing+Plant',
    description: 'Large-scale manufacturing facility for consumer goods production.',
  },
  {
    slug: 'lekki-gardens',
    title: 'Lekki Gardens Estate',
    category: 'Residential',
    location: 'Lagos, Nigeria',
    year: '2022',
    image: 'https://placehold.co/800x600/e2e8f0/64748b?text=Lekki+Gardens+Estate',
    description: 'Gated community with 250 family homes and comprehensive amenities.',
  },
];

export default function ProjectReferencesPage() {
  return (
    <div>
      {/* Hero Section */}
      <AnimatedSection>
        <section className="relative h-[40vh] flex items-center bg-slate-900">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://placehold.co/1600x900/e2e8f0/64748b?text=Project+References+Banner"
              alt="Conelli Engineering Project References banner image"
              fill
              priority
              className="object-cover opacity-40"
            />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 z-10 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Project References</h1>
            <p className="text-xl max-w-3xl text-slate-200">
              Explore our portfolio of completed and ongoing engineering and construction projects across Nigeria.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Filter Controls */}
      <AnimatedSection delay={0.2}>
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="font-medium text-slate-700">Filter by:</span>
                <select className="border border-slate-300 rounded-md px-3 py-2 bg-white text-slate-700 focus:ring-2 focus:ring-slate-500">
                  <option value="">All Categories</option>
                  <option value="commercial">Commercial</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="residential">Residential</option>
                  <option value="industrial">Industrial</option>
                  <option value="healthcare">Healthcare</option>
                </select>
                <select className="border border-slate-300 rounded-md px-3 py-2 bg-white text-slate-700 focus:ring-2 focus:ring-slate-500">
                  <option value="">All Years</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="older">Earlier</option>
                </select>
                <select className="border border-slate-300 rounded-md px-3 py-2 bg-white text-slate-700 focus:ring-2 focus:ring-slate-500">
                  <option value="">All Locations</option>
                  <option value="lagos">Lagos</option>
                  <option value="abuja">Abuja</option>
                  <option value="port-harcourt">Port Harcourt</option>
                  <option value="other">Other Locations</option>
                </select>
              </div>
              <div>
                <select className="border border-slate-300 rounded-md px-3 py-2 bg-white text-slate-700 focus:ring-2 focus:ring-slate-500">
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="a-z">A-Z</option>
                  <option value="z-a">Z-A</option>
                </select>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Projects Grid */}
      <AnimatedSection delay={0.4}>
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Link 
                  key={index} 
                  href={`/project-references/${project.slug}`} 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-slate-800 text-white text-sm font-medium py-1 px-3 rounded-full">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-slate-900">{project.title}</h3>
                    <div className="flex items-center text-slate-600 mb-3">
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
                    <p className="text-slate-700 mb-4">{project.description}</p>
                    <div className="text-slate-800 font-medium flex items-center">
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
      </AnimatedSection>

      {/* Pagination */}
      <AnimatedSection delay={0.6}>
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-center">
              <nav className="inline-flex items-center">
                <button className="px-4 py-2 border border-slate-300 rounded-l-md border-r-0 hover:bg-slate-50 text-slate-700">
                  Previous
                </button>
                <button className="px-4 py-2 border border-slate-300 bg-slate-800 text-white">1</button>
                <button className="px-4 py-2 border border-slate-300 border-l-0 border-r-0 hover:bg-slate-50 text-slate-700">2</button>
                <button className="px-4 py-2 border border-slate-300 border-l-0 border-r-0 hover:bg-slate-50 text-slate-700">3</button>
                <button className="px-4 py-2 border border-slate-300 rounded-r-md border-l-0 hover:bg-slate-50 text-slate-700">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection delay={0.8}>
        <section className="py-20 lg:py-28 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a Project in Mind?</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8 text-slate-200">
              Let's discuss how Conelli Engineering can help bring your vision to life with our expertise 
              and proven track record of successful projects.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-slate-900 px-8 py-4 rounded-md font-medium hover:bg-slate-100 transition-all focus:ring-2 focus:ring-slate-500"
            >
              Contact Our Team
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}