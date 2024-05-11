import Sidebar from "../components/Sidebar/Index";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <div className="flex h-screen w-full bg-gray-100">
          <Sidebar />
          <div className="flex flex-col w-full h-full ml-20 p-4">
            {children}
          </div>
        </div>
      </div>
  );
}
