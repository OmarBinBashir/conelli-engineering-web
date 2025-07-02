import Link from 'next/link';

const news = [
  { title: 'Conelli Wins National Engineering Award', date: '2024-04-10' },
  { title: 'Launch of REDD Subsidiary', date: '2024-03-15' },
  { title: 'Sustainability Milestone Achieved', date: '2024-02-28' },
  { title: 'New Project: Abuja Green Community', date: '2024-01-20' },
];

export default function MediaPage() {
  return (
    <main className="max-w-7xl mx-auto py-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900">Media</h1>
      {/* News Grid */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold mb-2 text-slate-900">{item.title}</h2>
                <p className="text-slate-500 text-sm mb-4">{item.date}</p>
              </div>
              <div className="mt-auto">
                <span className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs">News</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Social Media Links */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4 text-slate-800">Follow Us</h2>
        <div className="flex justify-center gap-6">
          <Link href="https://www.linkedin.com/company/conelliengineering" className="text-slate-700 hover:text-blue-700 font-medium" target="_blank">LinkedIn</Link>
          <Link href="https://twitter.com/conellieng" className="text-slate-700 hover:text-blue-500 font-medium" target="_blank">Twitter</Link>
          <Link href="#" className="text-slate-700 hover:text-pink-600 font-medium" target="_blank">Instagram</Link>
        </div>
      </section>
    </main>
  );
}