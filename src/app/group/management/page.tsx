import PageHeader from '@/components/layout/PageHeader';

export default function ManagementPage() {
  return (
    <div>
      <PageHeader 
        title="Our Management" 
        backgroundImageUrl="https://placehold.co/1600x900/e2e8f0/64748b?text=Management+Team" 
      />
      
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Leadership Excellence</h2>
            <p className="text-lg text-slate-600">
              Our management team brings together decades of experience in engineering, construction, 
              and business leadership to guide Conelli Engineering toward continued success and innovation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}