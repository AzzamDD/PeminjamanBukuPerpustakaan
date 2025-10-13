'use client';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Image src="/smkn 8 malang.png" alt="logo" width={60} height={40} />
      </div>

      {/* Center: Navigation */}
      <nav className="flex space-x-8 font-semibold text-gray-800 text-lg center text-center">
         <Link href="/dashboard" className="hover:text-red-600">
          BERANDA
        </Link>
        <Link href="/riwayat" className="hover:text-red-600">
          RIWAYAT PEMINJAMAN
        </Link>
        <Link href="/form" className="hover:text-red-600">
          FORM
        </Link>
        <Link href="/buku" className="hover:text-red-600">
          DAFTAR BUKU
        </Link>
        <Link href="/about" className="hover:text-red-600">
          ABOUT
        </Link>
         <Link href="/login" className="hover:text-red-600">
          LOGOUT
        </Link>
      </nav>
    </header>
  );
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* About Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-75 py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tentang Perpustakaan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Perpustakaan SMKN 8 Malang adalah pusat sumber daya pendidikan yang
              menyediakan koleksi buku, jurnal, dan materi digital untuk mendukung
              kurikulum vokasi. Kami berkomitmen untuk membangun generasi muda yang
              berpengetahuan.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-25 to-indigo-50 py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pembuat</h2>
          <p className="text-lg text-gray-600 mb-8">
            Nama : Achmad Iqbal Ilmi Azzam<br />
            Email : ajammdodot@gmail.com<br />
            IG : @szamm0_
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
          <p className="text-lg text-gray-600 mb-8">
            SMKN 8 Malang<br />
            Jl. Teluk Pacitan,Arjosari,Kec.Blimbing,Kota Malang, Jawa Timur<br />
            IG : @smkn8malang
          </p>
        </div>
      </section>
    </main>
  );
}
