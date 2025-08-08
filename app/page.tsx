import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <main className="bg-white text-slate-800 min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow">
        {/* HERO SECTION */}
        <header className="container mx-auto px-4 py-20 md:py-28 flex flex-col-reverse lg:flex-row gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              High-Quality Human-Powered Data for AI
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Multiple Network Solutions adalah agensi alih daya terkemuka yang menyediakan agen berkualitas untuk proyek transkripsi, anotasi, terjemahan, dan pelatihan AI lainnya, dengan jaminan hasil kerja manusia tanpa bantuan AI.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start gap-4">
              <a href="/about" className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
                Tentang Kami
              </a>
              <a href="/contact" className="inline-block bg-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-lg hover:bg-slate-300 transition-colors">
                Hubungi Kami
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/tes1.jpg"
              alt="Modern IT infrastructure"
              width={1200}
              height={700}
              className="rounded-xl shadow-2xl"
              objectFit="cover"
            />
          </div>
        </header>

        {/* CORE SERVICES SECTION */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Layanan Utama Kami</h2>
            <p className="mt-2 text-slate-500 max-w-2xl mx-auto">Kami fokus pada kualitas, integritas, dan kepuasan klien dalam setiap aspek operasi kami.</p>
            <div className="mt-16 grid md:grid-cols-3 gap-10 text-left">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-blue-600">Transkripsi & Subtitling</h3>
                <p className="mt-2 text-slate-500">Menyediakan layanan transkripsi dan subtitling akurat dalam berbagai bahasa, termasuk bahasa nasional dan daerah Indonesia.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-blue-600">Anotasi & Labelling Data</h3>
                <p className="mt-2 text-slate-500">Layanan anotasi atau pelabelan data untuk berbagai proyek pelatihan AI, termasuk pemetaan dan pencarian visual.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-blue-600">Terjemahan & Rekaman</h3>
                <p className="mt-2 text-slate-500">Proyek terjemahan dan rekaman yang dikerjakan oleh agen-agen terlatih dari dalam dan luar negeri tanpa bantuan bot penerjemah.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CALL TO ACTION */}
        <section className="container mx-auto px-4 py-24 text-center">
          <h2 className="text-3xl font-bold">Siap Memulai Proyek Anda?</h2>
          <p className="mt-2 text-slate-500">Hubungi kami untuk diskusi melalui panggilan telepon atau video.</p>
          <div className="mt-8">
            <a href="#" className="inline-block bg-blue-600 text-white font-bold text-lg px-10 py-4 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105">
              Tawarkan Proyek Anda
            </a>
          </div>
        </section>
      </div>
      
      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} PT MULTIPLE NETWORK SOLUTIONS. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="text-slate-500 hover:text-blue-600">Privacy</a>
             <a href="#" className="text-slate-500 hover:text-blue-600">Terms</a>
             <a href="#" className="text-slate-500 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </footer> 
    </main>
  );
} 