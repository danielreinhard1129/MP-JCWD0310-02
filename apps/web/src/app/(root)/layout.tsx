import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div >
        <Navbar />
        <main className="bg-secondary/10 min-h-[calc(100vh-128px)]">{children}</main>
      </div>
      <Footer />
    </>
  );
}
