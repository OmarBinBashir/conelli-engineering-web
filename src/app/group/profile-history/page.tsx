import Image from 'next/image';
import AnimatedSection from '@/components/shared/AnimatedSection';

function CompanyTimeline() {
  // Simple visual timeline for company history
  const milestones = [
    { year: '2016', event: 'Conelli Engineering Limited founded in Abuja.' },
    { year: '2018', event: 'Expanded operations to Kaduna.' },
    { year: '2020', event: 'Launched major infrastructure projects.' },
    { year: '2023', event: 'Recognized for innovation in civil engineering.' },
  ];
  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold mb-6 text-slate-900 text-center">Our Journey</h2>
      <ol className="relative border-l-4 border-slate-300 max-w-2xl mx-auto">
        {milestones.map((m, i) => (
          <li key={i} className="mb-10 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-slate-800 rounded-full ring-8 ring-white text-white font-bold">{m.year}</span>
            <p className="text-lg text-slate-700 ml-2">{m.event}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function ProfileHistoryPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://placehold.co/1600x900/e2e8f0/64748b?text=About+Us+Banner"
            alt="About Conelli Engineering banner image"
            fill
            priority
            className="object-cover opacity-40"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 z-10 text-white">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Profile & History</h1>
            <p className="text-xl max-w-3xl text-slate-200">
              Learn about our journey, company profile, and the milestones that shaped Conelli Engineering.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Profile */}
      <AnimatedSection>
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Company Profile</h2>
                <p className="text-lg mb-6 text-slate-600">
                  Founded in 2016, Conelli Engineering Limited has established itself as a premier engineering company in Nigeria, 
                  specializing in infrastructure development, construction, and civil engineering services.
                </p>
                <p className="text-lg mb-6 text-slate-600">
                  With headquarters in Abuja and operations extending to Kaduna, we serve clients throughout 
                  Nigeria with innovative engineering solutions that meet international standards while considering local needs and conditions.
                </p>
                <p className="text-lg text-slate-600">
                  Our multidisciplinary team brings together expertise across civil, structural, mechanical, and electrical engineering,
                  allowing us to deliver comprehensive solutions for projects of any scale.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://placehold.co/600x600/e2e8f0/64748b?text=Company+Profile"
                  alt="Conelli Engineering company profile image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Mission & Vision */}
      <AnimatedSection>
        <section className="py-20 lg:py-28 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-slate-800/50 p-8 rounded-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg mb-4 text-slate-200">
                  To deliver innovative engineering solutions that contribute to Nigeria's development, 
                  while maintaining the highest standards of quality, safety, and environmental responsibility.
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-slate-200">
                  <li>Execute projects with precision and excellence</li>
                  <li>Create sustainable infrastructure that stands the test of time</li>
                  <li>Contribute to Nigeria's economic and social development</li>
                  <li>Provide value-driven solutions to our clients' challenges</li>
                </ul>
              </div>
              <div className="bg-slate-800/50 p-8 rounded-lg">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg mb-4 text-slate-200">
                  To be the leading engineering company in West Africa, recognized for excellence, innovation, 
                  and positive impact on the communities we serve.
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-slate-200">
                  <li>Pioneer sustainable engineering practices in Africa</li>
                  <li>Develop the next generation of engineering talent</li>
                  <li>Set new standards for quality and safety in the industry</li>
                  <li>Create iconic structures that define Nigeria's landscape</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Company Timeline */}
      <AnimatedSection>
        <CompanyTimeline />
      </AnimatedSection>
    </div>
  );
} 