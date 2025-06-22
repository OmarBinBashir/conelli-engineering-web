import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/shared/AnimatedSection';

export default function CareersPage() {
  // Sample job openings - in a real app these would come from a CMS or API
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Structural Engineer',
      location: 'Lagos',
      department: 'Engineering',
      type: 'Full-time',
      description: 'Lead structural engineering design for major commercial and infrastructure projects across Nigeria. Requires 8+ years of experience and professional engineering licensure.',
      responsibilities: [
        'Develop structural designs for complex buildings and infrastructure',
        'Review and approve engineering drawings and specifications',
        'Coordinate with architects and other engineering disciplines',
        'Mentor junior engineers and oversee their work',
        'Ensure compliance with local building codes and standards'
      ],
      requirements: [
        'Bachelor\'s degree in Structural Engineering (Master\'s preferred)',
        'Minimum 8 years of relevant experience',
        'Nigerian Society of Engineers membership',
        'Proficiency with structural analysis software',
        'Experience with high-rise buildings and large-scale infrastructure'
      ]
    },
    {
      id: 2,
      title: 'Project Manager',
      location: 'Abuja',
      department: 'Operations',
      type: 'Full-time',
      description: 'Oversee major construction projects from initiation to completion, managing budgets, schedules, and client relationships with a focus on timely delivery.',
      responsibilities: [
        'Develop and maintain project schedules, budgets, and resource plans',
        'Coordinate activities among different contractors and stakeholders',
        'Monitor project progress and implement corrective actions as needed',
        'Maintain regular communication with clients on project status',
        'Ensure quality control and safety standards are met'
      ],
      requirements: [
        'Bachelor\'s degree in Engineering, Construction Management, or related field',
        'Minimum 5 years of project management experience',
        'PMP certification preferred',
        'Strong knowledge of construction methods and project management tools',
        'Excellent leadership and communication skills'
      ]
    },
    {
      id: 3,
      title: 'Civil Engineer',
      location: 'Port Harcourt',
      department: 'Engineering',
      type: 'Full-time',
      description: 'Design and oversee civil engineering aspects of various infrastructure and commercial projects, focusing on site development, drainage, and utilities.',
      responsibilities: [
        'Prepare civil engineering designs for infrastructure projects',
        'Perform engineering calculations and analysis',
        'Develop site grading, drainage, and utility plans',
        'Conduct site visits and inspections',
        'Collaborate with multidisciplinary teams'
      ],
      requirements: [
        'Bachelor\'s degree in Civil Engineering',
        'Minimum 3 years of experience in civil engineering',
        'Experience with AutoCAD Civil 3D and related software',
        'Knowledge of local regulations and construction practices',
        'Strong analytical and problem-solving skills'
      ]
    },
    {
      id: 4,
      title: 'Sustainability Specialist',
      location: 'Lagos',
      department: 'Design & Innovation',
      type: 'Full-time',
      description: 'Champion sustainable design practices across all company projects, leading green building certifications and implementing eco-friendly solutions.',
      responsibilities: [
        'Integrate sustainable design strategies into projects',
        'Lead LEED, EDGE, and other green building certification processes',
        'Conduct energy modeling and environmental impact analyses',
        'Develop sustainability guidelines for company operations',
        'Stay updated on sustainable building technologies and practices'
      ],
      requirements: [
        'Bachelor\'s degree in Environmental Engineering, Architecture, or related field',
        'LEED AP or other sustainability certification',
        'Minimum 4 years of experience in sustainable design',
        'Knowledge of renewable energy systems and green building materials',
        'Experience with life cycle assessment and energy modeling'
      ]
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <AnimatedSection>
        <section className="relative h-[40vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Engineering Team and Modern Office"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="container mx-auto px-4 z-10 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers</h1>
            <p className="text-xl max-w-3xl">
              Join our team of talented professionals building Nigeria's future through innovative engineering.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Introduction */}
      <AnimatedSection delay={0.2}>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Work With Us</h2>
                <p className="text-lg mb-6">
                  At Conelli Engineering, we're more than just a construction company. We're a team of problem-solvers, 
                  innovators, and visionaries committed to transforming Nigeria's built environment through world-class engineering.
                </p>
                <p className="text-lg mb-6">
                  We offer competitive compensation, continuous professional development opportunities, and the chance to work 
                  on some of the most exciting and impactful projects in West Africa.
                </p>
                <p className="text-lg">
                  Our collaborative culture values creativity, excellence, and integrity. We're looking for talented individuals who 
                  share our passion for quality engineering and want to make a difference in Nigeria's development.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/assets/careers-1.jpg"
                    alt="Conelli Engineering Team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/assets/careers-2.jpg"
                    alt="Conelli Engineering Office"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/assets/careers-3.jpg"
                    alt="Conelli Engineering Site Visit"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/assets/careers-4.jpg"
                    alt="Conelli Engineering Workshop"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection delay={0.4}>
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Employee Benefits</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: 'Professional Development',
                  description: 'Continuous training opportunities, professional certification support, and mentorship programs.',
                  icon: '🎓',
                },
                {
                  title: 'Health & Wellbeing',
                  description: 'Comprehensive health insurance, wellness programs, and work-life balance initiatives.',
                  icon: '🏥',
                },
                {
                  title: 'Career Growth',
                  description: 'Clear career paths, regular performance reviews, and internal promotion opportunities.',
                  icon: '📈',
                },
                {
                  title: 'Innovative Environment',
                  description: 'Work with cutting-edge technologies and contribute to groundbreaking projects.',
                  icon: '💡',
                },
                {
                  title: 'Competitive Compensation',
                  description: 'Industry-leading salary packages and performance-based bonuses.',
                  icon: '💰',
                },
                {
                  title: 'Team Collaboration',
                  description: 'Supportive team environment with regular team-building activities.',
                  icon: '🤝',
                },
                {
                  title: 'Social Responsibility',
                  description: 'Opportunities to participate in community service and environmental initiatives.',
                  icon: '🌱',
                },
                {
                  title: 'Work Flexibility',
                  description: 'Flexible working arrangements to accommodate different needs and lifestyles.',
                  icon: '⏰',
                },
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
                  <span className="text-4xl mb-4 inline-block">{benefit.icon}</span>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Current Openings */}
      <AnimatedSection delay={0.6}>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Current Openings</h2>
            
            <div className="flex flex-wrap mb-8 gap-3">
              <button className="bg-dark-gray text-white px-4 py-2 rounded-md">All Departments</button>
              <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md">Engineering</button>
              <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md">Operations</button>
              <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md">Design & Innovation</button>
              <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md">Administration</button>
            </div>

            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <div key={job.id} className="border border-gray-200 rounded-lg overflow-hidden hover:border-dark-gray transition-colors">
                  <details className="group">
                    <summary className="flex justify-between items-center p-6 cursor-pointer">
                      <div>
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">{job.location}</span>
                          <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">{job.department}</span>
                          <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded">{job.type}</span>
                        </div>
                      </div>
                      <svg className="h-6 w-6 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="p-6 pt-0 border-t">
                      <p className="mb-4">{job.description}</p>
                      
                      <h4 className="font-bold text-lg mb-2">Key Responsibilities:</h4>
                      <ul className="list-disc list-inside mb-4">
                        {job.responsibilities.map((item, index) => (
                          <li key={index} className="mb-1">{item}</li>
                        ))}
                      </ul>
                      
                      <h4 className="font-bold text-lg mb-2">Requirements:</h4>
                      <ul className="list-disc list-inside mb-4">
                        {job.requirements.map((item, index) => (
                          <li key={index} className="mb-1">{item}</li>
                        ))}
                      </ul>
                      
                      <button className="mt-4 bg-dark-gray text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Internship Program */}
      <AnimatedSection delay={0.8}>
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/assets/internship.jpg"
                  alt="Conelli Engineering Internship Program"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Internship Program</h2>
                <p className="text-lg mb-6">
                  Our structured internship program offers students and recent graduates the opportunity to gain hands-on 
                  experience working alongside our experienced professionals on real projects.
                </p>
                <p className="text-lg mb-6">
                  Interns at Conelli Engineering receive mentorship, participate in professional development workshops, 
                  and have the opportunity to make meaningful contributions to our projects.
                </p>
                <p className="text-lg mb-8">
                  Many of our full-time employees started as interns, and we're committed to developing the next generation 
                  of engineering talent in Nigeria.
                </p>
                <Link 
                  href="/contact" 
                  className="bg-dark-gray text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all"
                >
                  Inquire About Internships
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Application Process */}
      <AnimatedSection delay={1.0}>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Hiring Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-300"></div>
                
                {/* Timeline items */}
                {[
                  {
                    step: 'Application Review',
                    description: 'Our HR team reviews your application to assess your qualifications against the job requirements.',
                    days: '1-2 days',
                    icon: '📝',
                  },
                  {
                    step: 'Initial Screening',
                    description: 'Qualified candidates participate in a phone or video interview to discuss experience and expectations.',
                    days: '3-5 days',
                    icon: '📞',
                  },
                  {
                    step: 'Technical Assessment',
                    description: 'Depending on the role, you may complete a technical test, design challenge, or case study.',
                    days: '1 week',
                    icon: '💻',
                  },
                  {
                    step: 'Panel Interview',
                    description: 'Meet with the hiring manager and team members to dive deeper into your expertise and fit.',
                    days: '1-2 weeks',
                    icon: '👥',
                  },
                  {
                    step: 'Final Decision',
                    description: 'We make our hiring decision and extend an offer to the selected candidate.',
                    days: '1 week',
                    icon: '🎉',
                  },
                ].map((item, index) => (
                  <div key={index} className="relative mb-16 last:mb-0">
                    <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      {/* Timeline bubble */}
                      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-gray text-white flex items-center justify-center z-10">
                        <span>{index + 1}</span>
                      </div>
                      
                      {/* Content */}
                      <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                          <div className="flex items-center mb-4">
                            <span className="text-3xl mr-3">{item.icon}</span>
                            <h3 className="text-xl font-bold">{item.step}</h3>
                          </div>
                          <p className="mb-2">{item.description}</p>
                          <span className="text-sm font-medium bg-gray-200 px-2 py-1 rounded-md">
                            Timeframe: {item.days}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection delay={1.2}>
        <section className="py-16 bg-dark-gray text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Take the next step in your engineering career with Conelli Engineering and be part of 
              transformative projects that shape Nigeria's future.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="bg-white text-dark-gray px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-all">
                Browse Open Positions
              </button>
              <Link 
                href="/contact" 
                className="border border-white text-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-dark-gray transition-all"
              >
                Contact Recruitment
              </Link>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}