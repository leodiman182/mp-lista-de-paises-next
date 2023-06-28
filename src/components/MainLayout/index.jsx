import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MainLayout = ({ children }) => {
  return (
    <main className="bg-zinc-800">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
