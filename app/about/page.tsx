import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-800 min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow">
        {/* HERO HEADER */}
        <header className="bg-slate-50 text-center py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-blue-600">Tentang Kami</h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-slate-600">
              Komitmen kami terhadap kualitas, integritas, dan kepuasan pelanggan terbukti dalam setiap aspek operasi kami. Kami adalah perusahaan yang berbasis di Indonesia.
            </p>
          </div>
        </header>
        
        {/* OUR STORY SECTION */}
        <section className="container mx-auto px-4 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold">Perjalanan Kami</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Kami memulai bisnis sebagai agensi alih daya pada Juli 2020, dengan fokus utama pada pekerjaan transkripsi. Sejak saat itu, kami telah berekspansi ke layanan terjemahan, subtitling, anotasi data, dan berbagai pekerjaan pelatihan AI lainnya. Kami memprioritaskan kualitas dengan jarang mengambil kontrak dari pihak ke-2 atau ke-3 dan fokus pada kesejahteraan para agen kami.
            </p>
          </div>
          <div>
            <Image
              src="/tes2.jpeg"
              alt="Legalitas Perusahaan"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
              objectFit="cover"
            />
          </div>
        </section>

        {/* OUR VALUES SECTION */}
        <section className="bg-slate-50 py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Nilai-Nilai Inti Kami</h2>
            <p className="mt-2 text-slate-500 max-w-2xl mx-auto">Prinsip-prinsip ini memandu setiap keputusan yang kami buat.</p>
            <div className="mt-16 grid md:grid-cols-3 gap-10 text-left">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-600">Kualitas Terbaik</h3>
                <p className="mt-2 text-slate-500">Setiap agen diwawancara dan dilatih untuk memastikan semua memiliki kapabilitas yang sama untuk memberikan kualitas terbaik.</p>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-600">Integritas & Kesejahteraan</h3>
                <p className="mt-2 text-slate-500">Kami peduli pada kesejahteraan karyawan dan selalu memperhatikan kontrak yang diberikan untuk membangun kepercayaan.</p>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-blue-600">100% Tenaga Manusia</h3>
                <p className="mt-2 text-slate-500">Kami memastikan pekerjaan dilakukan oleh manusia sungguhan tanpa bantuan AI atau bot penerjemah untuk proyek Pelatihan-AI.</p>
              </div>
            </div>
          </div>
        </section>

        {/* MEET THE TEAM SECTION */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Tim Kami</h2>
            <p className="mt-2 text-slate-500">Para pelatih internal kami.</p>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 md:w-1/2 mx-auto">
              <div className="flex flex-col items-center">
                <Image src="/member1.jpeg" alt="Foto Mochammad Denny Kurniawan" width={120} height={120} className="rounded-full shadow-md object-cover" />
                <h4 className="mt-4 font-semibold">Mochammad Denny Kurniawan</h4>
                <p className="text-sm text-slate-500">Founder of MNS Company</p>
              </div>
               <div className="flex flex-col items-center">
                <Image src="/member2.jpeg" alt="Foto Cia" width={120} height={120} className="rounded-full shadow-md object-cover" />
                <h4 className="mt-4 font-semibold">Cia</h4>
                <p className="text-sm text-slate-500">Personal Assistant</p>
              </div>
            </div>
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