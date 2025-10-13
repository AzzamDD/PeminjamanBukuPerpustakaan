import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white shadow-sm">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/smkn 8 malang.png" alt="logo" width={60} height={40} />
      </div>

      {/* Navigation */}
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

export default function BukuPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Daftar Buku</h1>

        {/* Kotak Buku Manual */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Buku 1 */}
          <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <h1 className="text-xl font-bold mb-2">Semangkuk mie ayam sebelum mati</h1>
            <h2 className="text-gray-700 mb-3 italic">by Brian Krisna</h2>
            <p className="text-gray-600">
                Cerita tentang isu mental health yang beberapa tahun terakhir cukup mendapat sorotan.
            </p>
          </div>

          {/* Buku 2 */}
          <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <h1 className="text-xl font-bold mb-2">3726 mdpl</h1>
            <h2 className="text-gray-700 mb-3 italic">by  Nurwina Sari </h2>
            <p className="text-gray-600">
              Cerita tentang Rangga, Ketua Panitia OSPEK Fakultas Kehutanan 2023 itu juga menyibukkan dirinya dengan mengagumi Andini. Seorang mahasiswi yang bercita-cita bisa mendaki Gunung Rinjani, sekaligus adik tingkat yang ia sebut sebagai manusia favorit.
            </p>
          </div>

          {/* Buku 3 */}
          <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <h1 className="text-xl font-bold mb-2">1984</h1>
            <h2 className="text-gray-700 mb-3 italic">by George Orwell</h2>
            <p className="text-gray-600">
              Kisah distopia tentang totalitarianisme dan pengawasan.
            </p>
          </div>

          {/* Buku 4 */}
          <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <h1 className="text-xl font-bold mb-2">Pride and Prejudice</h1>
            <h2 className="text-gray-700 mb-3 italic">by Jane Austen</h2>
            <p className="text-gray-600">
              Novel romantis tentang moral, etika, dan pernikahan.
            </p>
          </div>

          {/* Buku 5 */}
          <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <h1 className="text-xl font-bold mb-2">The Catcher in the Rye</h1>
            <h2 className="text-gray-700 mb-3 italic">by J.D. Salinger</h2>
            <p className="text-gray-600">
              Kisah remaja dan pencarian jati diri di dunia yang penuh kepalsuan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
