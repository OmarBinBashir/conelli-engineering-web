import PageHeader from '@/components/layout/PageHeader';

export default function InnovationPage() {
  const reports = [
    {
      title: 'Smart Infrastructure for Urban Nigeria',
      summary: 'A comprehensive study on the integration of smart technologies in Nigerian urban infrastructure projects, focusing on efficiency and sustainability.',
    },
    {
      title: 'Sustainable Materials in Civil Engineering',
      summary: 'Research into the adoption of eco-friendly materials in construction, with case studies from recent Conelli projects.',
    },
    {
      title: 'Data-Driven Project Management',
      summary: 'An exploration of how data analytics and digital tools are transforming project delivery and outcomes in the engineering sector.',
    },
  ];
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

      <main className="max-w-5xl mx-auto py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">Innovation & R&amp;D</h1>
        <section>
          {reports.map((report, idx) => (
            <div key={idx} className="mb-12 p-8 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2 text-slate-800">{report.title}</h3>
              <p className="text-slate-700 mb-4">{report.summary}</p>
              <div className="w-full h-40 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">
                Image Gallery Placeholder
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}