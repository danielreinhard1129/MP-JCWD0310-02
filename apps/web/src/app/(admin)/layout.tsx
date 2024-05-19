'use client';

import Header from '@/components/Layout/Header';
import RoleGuard from '../hoc/RoleGuard';
import Sidebar from '@/components/SideBar';


const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <Header />
    <div className="flex h-screen border-collapse overflow-hidden">
        <Sidebar/>
        <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16 bg-secondary/10 pb-1">
            {children}
        </main>
    </div>
</>
  );
};

export default RoleGuard(RootLayout);
