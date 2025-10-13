
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Image src="/smkn 8 malang.png" alt="logo" width={60} height={40} />
      </div>

      {/* Center: Navigation */}
      <nav className="flex space-x-8 font-semibold text-gray-800 text-lg center text-center">
        <Link href="/login" className="hover:text-red-600">
          LOGIN?
        </Link>
      </nav>
    </header>
  );
};

export default function HomePage() {
  return (
    
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20 px-4">
        <div className="container mx-auto text-center">
          <Image
            src="/smkn 8 malang.png"
            alt="SMKN 8 Malang Logo"
            width={200}
            height={200}
            className="mx-auto mb-6 rounded-full shadow-lg"

          />
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Perpustakaan SMKN 8 Malang
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Selamat datang di perpustakaan digital SMKN 8 Malang. Akses ribuan buku, sumber daya pembelajaran, dan fasilitas studi yang mendukung pendidikan vokasi Anda.
          </p>
        </div>
      </section>
    </main>
  );
}
