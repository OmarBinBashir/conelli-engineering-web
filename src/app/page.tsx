import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lightbulb, Award, Leaf, HardHat, Building, Home } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center bg-slate-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero.jpg" 
            alt="Conelli Engineering Projects"
            fill
            priority
            className="object-cover opacity-50"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Engineering Excellence for Nigeria's Future
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-gray-300">
            Delivering world-class engineering solutions with precision, innovation, and integrity
          </p>
          <Button size="lg" asChild>
            <Link href="/projects">Explore Our Projects</Link>
          </Button>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Conelli Engineering</h2>
              <p className="text-lg mb-6 text-gray-600">
                Founded in 2005, Conelli Engineering has grown to become one of Nigeria's most trusted engineering firms. With a commitment to quality and innovation, we've delivered over 200 successful projects across the country.
              </p>
              <p className="text-lg mb-6 text-gray-600">
                Our team of highly qualified engineers, architects, and project managers work together to transform complex challenges into elegant solutions.
              </p>
              <Link 
                href="/about" 
                className="text-slate-900 font-medium flex items-center hover:underline"
              >
                Learn more about us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ShieldCheck className="h-6 w-6 text-amber-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Integrity</h4>
                    <p className="text-gray-600">Honest and ethical business practices in all our operations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Lightbulb className="h-6 w-6 text-amber-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Innovation</h4>
                    <p className="text-gray-600">Pushing boundaries with cutting-edge solutions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Award className="h-6 w-6 text-amber-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Excellence</h4>
                    <p className="text-gray-600">Uncompromising commitment to quality and standards</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Leaf className="h-6 w-6 text-amber-400 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Sustainability</h4>
                    <p className="text-gray-600">Building for a better, greener future</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              From concept design to project completion, we offer integrated engineering services that meet the highest standards of quality and safety.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Infrastructure Development',
                description: 'Roads, bridges, and public facilities built to last',
                icon: HardHat,
              },
              {
                title: 'Commercial Construction',
                description: 'Modern office spaces and retail facilities',
                icon: Building,
              },
              {
                title: 'Residential Development',
                description: 'Custom homes and residential communities',
                icon: Home,
              },
            ].map((service, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-lg text-white">
                <service.icon className="h-12 w-12 text-amber-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="mb-4 text-gray-300">{service.description}</p>
                <Link 
                  href="/services" 
                  className="text-amber-400 font-medium hover:underline"
                >
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Signature Work</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300">
              A dynamic carousel showcasing our featured projects will be implemented here soon.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-600">
            Let's discuss how we can bring your vision to life with our expertise and commitment to excellence.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}