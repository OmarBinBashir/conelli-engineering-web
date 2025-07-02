import AnimatedSection from '@/components/shared/AnimatedSection';

export default function ValuesPage() {
  return (
    <div>
      <AnimatedSection>
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">Our Values</h1>
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
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{value.title}</h3>
                    <p className="text-slate-700">{value.description}</p>
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