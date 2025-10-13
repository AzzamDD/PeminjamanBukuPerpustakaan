"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface RiwayatItem {
  nama: string;
  judulBuku: string;
  noBuku: string;
  tanggal: string;
}

interface RiwayatContextType {
  riwayat: RiwayatItem[];
  addRiwayat: (item: RiwayatItem) => void;
}

const RiwayatContext = createContext<RiwayatContextType | undefined>(undefined);

export const RiwayatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [riwayat, setRiwayat] = useState<RiwayatItem[]>([]);

  const addRiwayat = (item: RiwayatItem) => {
    setRiwayat((prev) => [...prev, item]);
  };

  return (
    <RiwayatContext.Provider value={{ riwayat, addRiwayat }}>
      {children}
    </RiwayatContext.Provider>
  );
};

export const useRiwayat = () => {
  const context = useContext(RiwayatContext);
  if (!context) {
    throw new Error('useRiwayat must be used within a RiwayatProvider');
  }
  return context;
};
