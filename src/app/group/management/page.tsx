import Image from 'next/image';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function ManagementPage() {
  return (
    <div>
      <AnimatedSection>
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">Management</h1>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Abdulkadir Abdullahi Bala Adamu',
                  position: 'Founder & Managing Director',
                  bio: 'Abdulkadir is a Nigerian entrepreneur and the founder of Conelli Engineering Limited. With a focus on solving Africa\'s unique infrastructure challenges, he led his team to invent a sustainable, nationally-recognized solution to the theft of drainage covers in Nigeria. He is passionate about leveraging indigenous resources and technology to build a better future for all.',
                },
                {
                  name: 'ABDULAZEEZ Abdulazeez',
                  position: 'Builder & Project Manager',
                  bio: 'A graduate of Ahmadu Bello University, Abdulazeez brings rigorous academic knowledge and hands-on site supervision experience to the team. He excels in managing projects from inception to handover, ensuring all work meets the highest standards of quality, safety, and structural integrity. His proficiency in modern design and analysis software is key to our workflow efficiency.',
                },
                {
                  name: 'Echefu Jeremiah',
                  position: 'Site Civil Engineer',
                  bio: 'Jeremiah is a dedicated Site Civil Engineer responsible for the day-to-day execution and technical oversight of our construction projects. With a keen eye for detail, he ensures that all on-site operations adhere strictly to engineering plans and safety protocols, guaranteeing the durability and quality of our builds.',
                },
              ].map((leader, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-slate-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <div className="relative h-64">
                      <Image
                        src="https://placehold.co/400x400/e2e8f0/64748b?text=Team+Member"
                        alt="A professional headshot of a Conelli Engineering team member"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1 text-slate-900">{leader.name}</h3>
                      <p className="text-slate-600 font-medium mb-3">{leader.position}</p>
                      <p className="text-slate-700">{leader.bio}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}