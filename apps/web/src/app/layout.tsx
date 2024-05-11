import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import {AuthProvider} from '@/app/providers/AuthProvider';
import StoreProvider from '@/app/providers/StoreProvider';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-between h-full min-h-[100vh]">
        <StoreProvider>
          <AuthProvider>
              <Navbar />
              {children}
              <Footer />
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
