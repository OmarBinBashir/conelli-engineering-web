import PageHeader from '@/components/layout/PageHeader';

export default function ProductsServicesPage() {
  return (
    <div>
      <PageHeader 
        title="Products & Services" 
        backgroundImageUrl="https://placehold.co/1600x900/e2e8f0/64748b?text=Products+and+Services" 
      />
      
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Comprehensive Solutions</h2>
            <p className="text-lg text-slate-600">
              Discover our full range of engineering products and services designed to meet 
              the diverse needs of Nigeria's infrastructure and construction sectors.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}