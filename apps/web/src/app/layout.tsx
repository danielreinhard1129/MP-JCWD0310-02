import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/app/providers/AuthProvider';
import StoreProvider from '@/app/providers/StoreProvider';

export const metadata: Metadata = {
  title: 'TuneTix',
  description: 'TuneTix Event Ticketing Solution',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <AuthProvider>{children}</AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
