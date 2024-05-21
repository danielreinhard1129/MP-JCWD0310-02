'use client';
import Navbar from '@/components/Navbar';
import ToastMessage from '../components/ToastMessage';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <Navbar />
        <main className="min-h-[calc(100vh-130px)] h-full w-full flex justify-center items-center">{children}</main>
      </div>
      <Footer />
    </>
  );
}
