import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center bg-dark-gray">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg"
            alt="About Conelli Engineering"
            fill
            priority
            className="object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl max-w-3xl">
              Learn about our journey, our values, and the team behind Conelli Engineering's success.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Profile */}
      <AnimatedSection>
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Company Profile</h2>
                <p className="text-lg mb-6">
                  Founded in 2016, Conelli Engineering Limited has established itself as a premier engineering company in Nigeria, 
                  specializing in infrastructure development, construction, and civil engineering services.
                </p>
                <p className="text-lg mb-6">
                  With headquarters in Abuja and operations extending to Kaduna, we serve clients throughout 
                  Nigeria with innovative engineering solutions that meet international standards while considering local needs and conditions.
                </p>
                <p className="text-lg">
                  Our multidisciplinary team brings together expertise across civil, structural, mechanical, and electrical engineering,
                  allowing us to deliver comprehensive solutions for projects of any scale.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg"
                  alt="Conelli Engineering Team"
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
        <section className="py-24 bg-dark-gray text-white">
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
      </AnimatedSection>

      {/* Leadership Team */}
      <AnimatedSection>
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Abdulkadir Abdullahi Bala Adamu',
                  position: 'Founder & Managing Director',
                  bio: 'Abdulkadir is a Nigerian entrepreneur and the founder of Conelli Engineering Limited. With a focus on solving Africa\'s unique infrastructure challenges, he led his team to invent a sustainable, nationally-recognized solution to the theft of drainage covers in Nigeria. He is passionate about leveraging indigenous resources and technology to build a better future for all.',
                  image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
                },
                {
                  name: 'ABDULAZEEZ Abdulazeez',
                  position: 'Builder & Project Manager',
                  bio: 'A graduate of Ahmadu Bello University, Abdulazeez brings rigorous academic knowledge and hands-on site supervision experience to the team. He excels in managing projects from inception to handover, ensuring all work meets the highest standards of quality, safety, and structural integrity. His proficiency in modern design and analysis software is key to our workflow efficiency.',
                  image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
                },
                {
                  name: 'Echefu Jeremiah',
                  position: 'Site Civil Engineer',
                  bio: 'Jeremiah is a dedicated Site Civil Engineer responsible for the day-to-day execution and technical oversight of our construction projects. With a keen eye for detail, he ensures that all on-site operations adhere strictly to engineering plans and safety protocols, guaranteeing the durability and quality of our builds.',
                  image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
                },
              ].map((leader, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
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
                      <p className="text-gray-700">{leader.bio}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Values */}
      <AnimatedSection>
        <section className="py-24 bg-gray-100">
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
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
                    <span className="text-4xl mb-4 block">{value.icon}</span>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection>
        <section className="py-24 bg-white">
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
      </AnimatedSection>
    </div>
  );
}