'use client';

import { Navbar, Footer } from '../ui';
import { PageTransition } from '../animations';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="flex-1">
          {children}
        </main>
      </PageTransition>
      <Footer />
    </>
  );
}