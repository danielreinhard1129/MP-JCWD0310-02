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
import {color} from "./ColorSchemaSidebar"

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
    name: 'Event',
    path: '/organizer-dashboard/event',
    icon: BadgeDollarSign,
    items : [
      {
        name : "Create Event",
        path : "/organizer-dashboard/event/create-event"
      },
      {
        name : "Manage Event",
        path : "/organizer-dashboard/event/manage-event"
      },
      {
        name : "Create Promotion",
        path : "/organizer-dashboard/event/create-promotion"
      },
    ],
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
  const [collapse, setCollapse] = useState(true);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div
      className={`fixed top-0 left-0 transition-all duration-500 ${
        collapse ? 'ml-[-200px]' : ''
      } h-screen w-64 ${color.background} shadow-lg z-10 p-4`}
    >
      <div className="flex flex-col space-y-10 w-full">
        <p className={`text-center ${color.primaryText} font-extrabold text-xl`}>TuneTix</p>
        <div className="w-full flex flex-row-reverse" onClick={handleCollapse}>
          <div
            className={`transition-all relative ${color.primary} ${color.primaryBorder} rounded-tr-full rounded-br-full border-4 duration-500 ${
              collapse ? 'scale-x-[-1] left-4' : 'scale-x-[1] left-12'
            }`}
          >
            <div className="">
              <CircleArrowLeft className='w-8 h-8'/>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2 transition-all duration-500">
          {items.map((item, index) => (
            <SidebarItem key={index} collapse={handleCollapse} item={item}/>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
