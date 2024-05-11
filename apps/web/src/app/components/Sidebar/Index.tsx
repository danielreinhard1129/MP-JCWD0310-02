'use client';
import {
  LucideIcon,
  LayoutDashboard,
  BadgeDollarSign,
  CircleUserRound,
  Settings,
  WalletCards,
  CircleArrowLeft,
  CircleArrowRight,
} from 'lucide-react';
import SidebarItem from './Items';
import { useState } from 'react';

interface ISidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
}

const items: ISidebarItem[] = [
  {
    name: 'Dashboard',
    path: '/organizer-dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Transaction',
    path: '/organizer-dashboard',
    icon: BadgeDollarSign,
  },
  {
    name: 'Payment',
    path: '/organizer-dashboard',
    icon: WalletCards,
  },
  {
    name: 'Accounts',
    path: '/accounts',
    icon: CircleUserRound,
  },
  {
    name: 'Settings',
    path: '/settings',
    icon: Settings,
    items: [
      {
        name: 'General',
        path: '/settings',
      },
      {
        name: 'Security',
        path: '/settings/security',
      },
      {
        name: 'Notifications',
        path: '/settings/notifications',
      },
    ],
  },
];

const Sidebar = () => {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div
      className={`fixed top-0 left-0 transition-all duration-500 ${
        collapse ? 'ml-[-200px]' : ''
      } h-screen w-64 bg-white shadow-lg z-10 p-4`}
    >
      <div className="flex flex-col space-y-10 w-full">
        <div className="w-full flex flex-row-reverse" onClick={handleCollapse}>
          {/* {
            collapse ? 
            <CircleArrowRight/>
            : 
            <CircleArrowLeft />
        } */}
          <div
            className={`transition-all relative bg-red-500 border-red-500 rounded-tr-full rounded-br-full border-4 duration-500 ${
              collapse ? 'scale-x-[-1] left-4' : 'scale-x-[1] left-12'
            }`}>
            <div className=''>
              <CircleArrowLeft />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
