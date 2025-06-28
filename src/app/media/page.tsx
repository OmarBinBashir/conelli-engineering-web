import PageHeader from '@/components/layout/PageHeader';

export default function MediaPage() {
  return (
    <div>
      <PageHeader 
        title="Media Center" 
        backgroundImageUrl="https://placehold.co/1600x900/e2e8f0/64748b?text=Media+Center" 
      />
      
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Latest News & Updates</h2>
            <p className="text-lg text-slate-600">
              Stay informed with the latest news, press releases, and media coverage 
              about Conelli Engineering's projects and achievements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}