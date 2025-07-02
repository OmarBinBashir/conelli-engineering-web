import Image from 'next/image';

export default function ProductsServicesPage() {
  return (
    <main className="max-w-5xl mx-auto py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">Products & Services</h1>
      {/* Subsidiary Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Our Subsidiary: REDD (Real Estate Development Department)</h2>
        <div className="flex items-center justify-center mb-6">
          {/* Placeholder for REDD logo */}
          <div className="w-48 h-24 bg-slate-200 flex items-center justify-center rounded-lg shadow-inner">
            <span className="text-lg text-slate-500">REDD Logo</span>
          </div>
        </div>
        <p className="text-slate-700 text-center">REDD is our dedicated real estate development arm, delivering innovative property solutions.</p>
      </section>
      {/* Products Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Our Products</h2>
        <ul className="mb-8 list-disc list-inside text-slate-700">
          <li>Manhole Covers</li>
          <li>Tilemaster</li>
        </ul>
        <div className="flex items-center justify-center">
          {/* Placeholder for Conelli Engineering logo */}
          <div className="w-48 h-24 bg-slate-200 flex items-center justify-center rounded-lg shadow-inner">
            <span className="text-lg text-slate-500">Conelli Logo</span>
          </div>
        </div>
      </section>
    </main>
  );
}