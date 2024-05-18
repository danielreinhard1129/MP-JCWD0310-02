'use client';
import Sidebar from '../components/Sidebar/Index';
import RoleGuard from '../hoc/RoleGuard';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex w-full bg-gray-100">
        <Sidebar />
        <div className="flex flex-col w-full ml-16 p-8">{children}</div>
      </div>
    </div>
  );
};

export default 
// RoleGuard
(RootLayout);
