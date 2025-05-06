'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      {!isHomePage && <Header />}
      <main className={`flex-grow ${!isHomePage ? 'pt-16' : ''}`}>{children}</main>
      {!isHomePage && <Footer />}
    </div>
  );
};

export default MainLayout;
