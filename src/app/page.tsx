"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lightbulb, Award, Leaf, HardHat, Building, Home, ChevronLeft, ChevronRight } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import useEmblaCarousel from 'embla-carousel-react';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export default function HomePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const projects = [
    {
      id: 'project-one',
      title: 'Lagos Corporate Tower',
      image: 'https://placehold.co/800x600/e2e8f0/64748b?text=Lagos+Corporate+Tower',
      description: 'A 25-story modern office building in the heart of Lagos business district.',
    },
    {
      id: 'project-two',
      title: 'Abuja Highway Expansion',
      image: 'https://placehold.co/800x600/e2e8f0/64748b?text=Abuja+Highway+Expansion',
      description: 'Major expansion of a 35km highway connecting key districts in the capital city.',
    },
    {
      id: 'project-three',
      title: 'Port Harcourt Residential Complex',
      image: 'https://placehold.co/800x600/e2e8f0/64748b?text=Port+Harcourt+Residential',
      description: 'Luxury residential community featuring 120 apartments and modern amenities.',
    },
    {
      id: 'project-four',
      title: 'Kano Solar Power Plant',
      image: 'https://placehold.co/800x600/e2e8f0/64748b?text=Kano+Solar+Power+Plant',
      description: 'A 50MW solar power facility providing clean energy to the Kano region.',
    },
  ];

  const newsItems = [
    {
      title: 'Conelli Engineering Wins Major Infrastructure Contract',
      date: 'December 15, 2024',
      excerpt: 'We are proud to announce our selection for the new Abuja-Kaduna rail extension project.',
    },
    {
      title: 'Sustainability Initiative Recognized by Nigerian Government',
      date: 'November 28, 2024',
      excerpt: 'Our innovative drainage cover solution receives national recognition for environmental impact.',
    },
    {
      title: 'New Partnership with International Engineering Firm',
      date: 'November 10, 2024',
      excerpt: 'Strategic alliance formed to bring advanced construction technologies to Nigeria.',
    },
  ];

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div>
      {/* Hero Video Section */}
      <section className="relative h-[70vh] lg:h-[80vh] flex items-center bg-slate-900">
        {/* Video Player Layer */}
        <div 
          className="absolute top-0 left-0 w-full h-full cursor-pointer"
          onClick={() => setIsPlaying(true)}
        >
          <ReactPlayer
            url="https://vimeo.com/76979871"
            playing={isPlaying}
            light="https://placehold.co/1920x1080/e2e8f0/64748b?text=Click+to+Play+Video"
            width="100%"
            height="100%"
            className="absolute top-0 left-0 w-full h-full object-cover"
            controls={true}
          />
        </div>

        {/* Dark Overlay Layer */}
        <div className="absolute top-0 left-0 w-full h-full bg-slate-900/60"></div>

        {/* Text & Content Layer */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6">
                Engineering Excellence for Nigeria's Future
              </h1>
              <p className="text-lg lg:text-xl text-slate-200 max-w-3xl mx-auto mb-8">
                Delivering world-class engineering solutions with precision, innovation, and integrity across infrastructure, commercial, and residential projects.
              </p>
              <Button size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-4">
                <Link href="/project-references">Explore Our Projects</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <AnimatedSection>
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-slate-50 p-8 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Since 2016</div>
                <div className="text-slate-600">Years of Experience</div>
              </div>
              <div className="bg-slate-50 p-8 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">50+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div className="bg-slate-50 p-8 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">100%</div>
                <div className="text-slate-600">Project Delivery</div>
              </div>
              <div className="bg-slate-50 p-8 rounded-lg">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Abuja & Kaduna</div>
                <div className="text-slate-600">Key Operational Areas</div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Project References Carousel */}
      <AnimatedSection>
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Pioneering Progress: Our References</h2>
                <p className="text-lg text-slate-600 max-w-2xl">
                  Explore our portfolio of completed projects that showcase our engineering excellence and commitment to quality.
                </p>
              </div>
              <div className="hidden md:flex items-center gap-4">
                <button
                  onClick={scrollPrev}
                  className="p-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors"
                  aria-label="Previous project"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={scrollNext}
                  className="p-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors"
                  aria-label="Next project"
                >
                  <ChevronRight size={20} />
                </button>
                <Link 
                  href="/project-references"
                  className="ml-4 text-slate-800 font-medium hover:text-slate-600 transition-colors"
                >
                  View All References →
                </Link>
              </div>
            </div>

            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {projects.map((project, index) => (
                  <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-slate-900">{project.title}</h3>
                        <p className="text-slate-600 mb-4">{project.description}</p>
                        <Link
                          href={`/project-references/${project.id}`}
                          className="text-slate-800 font-medium hover:text-slate-600 transition-colors"
                        >
                          View Reference →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden justify-center items-center gap-4 mt-8">
              <button
                onClick={scrollPrev}
                className="p-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                className="p-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 transition-colors"
                aria-label="Next project"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Company Intro */}
      <AnimatedSection>
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">About Conelli Engineering</h2>
                <p className="text-lg mb-6 text-slate-600">
                  Founded in 2016, Conelli Engineering Limited has grown to become one of Nigeria's most trusted engineering firms. With a commitment to quality and innovation, we've delivered over 50 successful projects across the country.
                </p>
                <p className="text-lg mb-6 text-slate-600">
                  Our team of highly qualified engineers, architects, and project managers work together to transform complex challenges into elegant solutions, focusing on solving Africa's unique infrastructure challenges.
                </p>
                <Link 
                  href="/group/about-us" 
                  className="text-slate-800 font-medium flex items-center hover:text-slate-600 transition-colors"
                >
                  Learn more about us
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-slate-900">Our Core Values</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ShieldCheck className="h-6 w-6 text-slate-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Integrity</h4>
                      <p className="text-slate-600">Honest and ethical business practices in all our operations</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Lightbulb className="h-6 w-6 text-slate-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Innovation</h4>
                      <p className="text-slate-600">Pushing boundaries with cutting-edge solutions</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="h-6 w-6 text-slate-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Excellence</h4>
                      <p className="text-slate-600">Uncompromising commitment to quality and standards</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Leaf className="h-6 w-6 text-slate-600 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Sustainability</h4>
                      <p className="text-slate-600">Building for a better, greener future</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Core Services Section */}
      <AnimatedSection>
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Our Expertise</h2>
              <p className="text-lg max-w-3xl mx-auto text-slate-600">
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
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-slate-900 p-8 rounded-lg text-white hover:bg-slate-800 transition-colors">
                    <service.icon className="h-12 w-12 text-slate-300 mb-4" />
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="mb-4 text-slate-200">{service.description}</p>
                    <Link 
                      href="/expertise" 
                      className="text-slate-300 font-medium hover:text-white transition-colors"
                    >
                      Learn more →
                    </Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* News & Happenings */}
      <AnimatedSection>
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">News & Happenings</h2>
              <p className="text-lg max-w-3xl mx-auto text-slate-600">
                Stay updated with the latest developments, achievements, and insights from Conelli Engineering.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-all duration-300 border border-transparent hover:border-slate-200">
                    <div className="text-sm text-slate-500 mb-2">{item.date}</div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 mb-4">{item.excerpt}</p>
                    <Link
                      href="/media"
                      className="text-slate-800 font-medium hover:text-slate-600 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action Section */}
      <AnimatedSection>
        <section className="py-20 lg:py-28 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-slate-200">
              Let's discuss how we can bring your vision to life with our expertise and commitment to excellence.
            </p>
            <Button size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-4">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}