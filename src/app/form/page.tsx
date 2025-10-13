"use client";

import Link from "next/link";
import { useState } from "react";
import { useRiwayat } from "../../context/RiwayatContext";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white shadow-sm">
      {/* Left: Logo */}
      <div className="flex items-center">
        <img src="/smkn 8 malang.png" alt="logo" className="w-15 h-10" />
      </div>

      {/* Center: Navigation */}
      <nav className="flex space-x-8 font-semibold text-gray-800 text-lg text-center">
        <Link href="/dashboard" className="hover:text-red-600">
          BERANDA
        </Link>
        <Link href="/riwayat" className="hover:text-red-600">
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

const SimpleForm = () => {
  const [nama, setNama] = useState("");
  const [judulBuku, setJudulBuku] = useState("");
  const [noBuku, setNoBuku] = useState("");
  const { addRiwayat } = useRiwayat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry = {
      nama,
      judulBuku,
      noBuku,
      tanggal: new Date().toLocaleDateString(),
    };
    addRiwayat(newEntry);
    alert("Peminjaman berhasil disimpan!");
    setNama("");
    setJudulBuku("");
    setNoBuku("");
  };

  return (
    <>
      <Header />

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md w-80">
          <h2 className="text-xl font-semibold mb-4 text-center">Form peminjaman buku</h2>

          <div className="mb-3">
            <label className="block mb-1 text-sm font-medium">Nama</label>
            <input
              type="text"
              placeholder="Masukkan nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Judul buku</label>
            <input
              type="text"
              placeholder="Masukkan judul buku"
              value={judulBuku}
              onChange={(e) => setJudulBuku(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">No buku</label>
            <input
              type="text"
              placeholder="Seri buku"
              value={noBuku}
              onChange={(e) => setNoBuku(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Kirim
          </button>
        </form>
      </div>
    </>
  );
};

export default SimpleForm;
