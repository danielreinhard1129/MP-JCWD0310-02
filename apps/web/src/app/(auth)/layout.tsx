// import { useParams, usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-row min-h-screen h-full w-full">
        <div className="bg-indigo-950 w-[40%] flex flex-col items-center gap-12 py-8 px-4">
          {/* Logo */}
          <div className="flex flex-col text-center justify-center">
            <h1 className="font-extrabold text-[#ffff00] text-2xl">
              Welcome to
            </h1>
            <h1 className="font-extrabold text-[#ffff00] text-4xl">TuneTix</h1>
          </div>

          {/* Description */}

          <div className="text-[#ffff00] flex justify-center items-center transition-all duration-300"></div>
        </div>
        <div className="bg-[#fbfbf8] flex justify-center items-center min-h-screen h-full w-full p-20">
          {children}
        </div>
      </div>
    </>
  );
}
