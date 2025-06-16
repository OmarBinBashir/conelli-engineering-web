import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center bg-dark-gray">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/about-hero.jpg"
            alt="About Conelli Engineering"
            fill
            priority
            className="object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl">
            Learn about our journey, our values, and the team behind Conelli Engineering's success.
          </p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Company Profile</h2>
              <p className="text-lg mb-6">
                Founded in 2005, Conelli Engineering has established itself as a premier engineering company in Nigeria, 
                specializing in infrastructure development, construction, and civil engineering services.
              </p>
              <p className="text-lg mb-6">
                With headquarters in Lagos and regional offices in Abuja and Port Harcourt, we serve clients throughout 
                Nigeria with innovative engineering solutions that meet international standards while considering local needs and conditions.
              </p>
              <p className="text-lg">
                Our multidisciplinary team brings together expertise across civil, structural, mechanical, and electrical engineering,
                allowing us to deliver comprehensive solutions for projects of any scale.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/company-profile.jpg"
                alt="Conelli Engineering Headquarters"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="space-y-16">
            {[
              {
                year: '2005',
                title: 'Founding',
                description: 'Conelli Engineering was founded by Dr. Michael Adeyemi with a small team of 5 engineers focused on residential projects.',
                image: '/assets/history-1.jpg',
              },
              {
                year: '2010',
                title: 'Expansion',
                description: 'Expanded operations to include commercial construction and infrastructure projects. Opened our Abuja office.',
                image: '/assets/history-2.jpg',
              },
              {
                year: '2015',
                title: 'International Recognition',
                description: 'Completed our first government infrastructure project and received the Nigerian Engineering Excellence Award.',
                image: '/assets/history-3.jpg',
              },
              {
                year: '2020',
                title: 'Innovation Hub',
                description: 'Launched the Conelli Innovation Hub to explore sustainable engineering solutions for Africa\'s unique challenges.',
                image: '/assets/history-4.jpg',
              },
              {
                year: 'Today',
                title: 'Industry Leader',
                description: 'Now with over 120 staff and hundreds of successful projects, we continue to shape Nigeria\'s built environment.',
                image: '/assets/history-5.jpg',
              },
            ].map((milestone, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <span className="text-dark-gray font-bold text-xl mb-2 block">{milestone.year}</span>
                    <h3 className="text-2xl font-bold mb-4">{milestone.title}</h3>
                    <p className="text-lg">{milestone.description}</p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-dark-gray text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800/50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-4">
                To deliver innovative engineering solutions that contribute to Nigeria's development, 
                while maintaining the highest standards of quality, safety, and environmental responsibility.
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Execute projects with precision and excellence</li>
                <li>Create sustainable infrastructure that stands the test of time</li>
                <li>Contribute to Nigeria's economic and social development</li>
                <li>Provide value-driven solutions to our clients' challenges</li>
              </ul>
            </div>
            <div className="bg-gray-800/50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg mb-4">
                To be the leading engineering company in West Africa, recognized for excellence, innovation, 
                and positive impact on the communities we serve.
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Pioneer sustainable engineering practices in Africa</li>
                <li>Develop the next generation of engineering talent</li>
                <li>Set new standards for quality and safety in the industry</li>
                <li>Create iconic structures that define Nigeria's landscape</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Focusing on the Problem',
                description: 'We maintain laser focus on solving our clients\' challenges with innovative engineering solutions.',
                icon: '🎯',
              },
              {
                title: 'Earning Trust',
                description: 'We build lasting relationships through transparency, reliability, and consistent delivery.',
                icon: '🤝',
              },
              {
                title: 'Employing Empathy',
                description: 'We understand our clients\' needs and the impact of our work on communities.',
                icon: '❤️',
              },
              {
                title: 'Trusting the Process',
                description: 'We follow proven methodologies while remaining adaptable to project requirements.',
                icon: '⚙️',
              },
              {
                title: 'Flexible Disposition',
                description: 'We adapt our approach to meet the unique challenges of each project.',
                icon: '🔄',
              },
              {
                title: 'Having Fun Along the Way',
                description: 'We maintain a positive, collaborative environment that fosters creativity and innovation.',
                icon: '😊',
              },
            ].map((value, index) => (
              <div key={index} className="bg-gray-100 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Michael Adeyemi',
                position: 'Founder & CEO',
                bio: 'With over 25 years in the industry, Dr. Adeyemi founded Conelli Engineering to create infrastructure that transforms Nigeria.',
                image: '/assets/leader-1.jpg',
              },
              {
                name: 'Eng. Amina Bello',
                position: 'Chief Technical Officer',
                bio: 'A structural engineering expert with experience on landmark projects across West Africa and Europe.',
                image: '/assets/leader-2.jpg',
              },
              {
                name: 'Oluwaseun Olatunji',
                position: 'Chief Operations Officer',
                bio: 'Former project manager for multinational construction firms, bringing global best practices to all our operations.',
                image: '/assets/leader-3.jpg',
              },
              {
                name: 'Eng. Victor Nwosu',
                position: 'Head of Infrastructure',
                bio: 'Specializes in large-scale infrastructure projects with a focus on sustainable design and implementation.',
                image: '/assets/leader-4.jpg',
              },
              {
                name: 'Folake Adebayo',
                position: 'Director of Finance',
                bio: 'Oversees the company\'s financial strategy and ensures the efficient allocation of resources across all projects.',
                image: '/assets/leader-5.jpg',
              },
              {
                name: 'Eng. David Okafor',
                position: 'Head of Innovation',
                bio: 'Leads our research initiatives to develop engineering solutions specifically tailored for African contexts.',
                image: '/assets/leader-6.jpg',
              },
            ].map((leader, index) => (
              <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-dark-gray font-medium mb-3">{leader.position}</p>
                  <p>{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            We're always looking for talented engineers, architects, and construction professionals to help us 
            build Nigeria's future.
          </p>
          <Link 
            href="/careers" 
            className="bg-dark-gray text-white px-8 py-4 rounded-md font-medium hover:bg-gray-800 transition-all"
          >
            View Career Opportunities
          </Link>
        </div>
      </section>
    </div>
  );
}