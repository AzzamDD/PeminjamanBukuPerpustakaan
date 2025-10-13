"use client";

import Link from 'next/link';
import { useRiwayat } from '../../context/RiwayatContext';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white">
      {/* Left: Logo */}
      <div className="flex items-center">
        <img src="/smkn 8 malang.png" alt="logo" className="w-15 h-10" />
      </div>

      {/* Center: Navigation */}
      <nav className="flex space-x-8 font-semibold text-gray-800 text-lg center text-center">
         <Link href="/dashboard" className="hover:text-red-600">
          BERANDA
        </Link>
        <Link href="/dashboard" className="hover:text-red-600">
          RIWAYAT PEMINJAMAN
        </Link>
        <Link href="/form" className="hover:text-red-600">
          FORM
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


const RiwayatForm = () => {
  const { riwayat } = useRiwayat();

  return (
    <>
      <Header />

      <div className="p-5 min-h-screen bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">Riwayat Peminjaman Buku</h2>
          {riwayat.length === 0 ? (
            <p className="text-center text-gray-500">Belum ada riwayat peminjaman.</p>
          ) : (
            <div className="grid gap-4">
              {riwayat.map((item: any, index: number) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <p><strong>Nama:</strong> {item.nama}</p>
                  <p><strong>Judul Buku:</strong> {item.judulBuku}</p>
                  <p><strong>No Buku:</strong> {item.noBuku}</p>
                  <p><strong>Tanggal:</strong> {item.tanggal}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RiwayatForm;
