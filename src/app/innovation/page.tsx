import PageHeader from '@/components/layout/PageHeader';

export default function InnovationPage() {
  return (
    <div>
      <PageHeader 
        title="Innovation Hub" 
        backgroundImageUrl="https://placehold.co/1600x900/e2e8f0/64748b?text=Innovation+Hub" 
      />
      
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Pioneering the Future</h2>
            <p className="text-lg text-slate-600">
              Explore our cutting-edge innovations and research initiatives that are 
              shaping the future of engineering and construction in Nigeria.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}