import React from 'react';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen bg-kalyan-bg selection:bg-kalyan-gold selection:text-white">
      <Navbar />
      <main className="relative z-10 w-full pt-[120px]">
        {children}
      </main>
    </div>
  );
}
