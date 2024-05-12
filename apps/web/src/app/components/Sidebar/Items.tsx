'use client';
import { useMemo, useState } from 'react';
import { ChevronDown, LucideIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

import SubMenuItem from './SubItem';
import { color } from './ColorSchemaSidebar';

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

const SidebarItem = ({ item }: { item: ISidebarItem }) => {
  const { name, icon: Icon, items, path } = item;
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    if (items && items.length > 0) {
      return setExpanded(!expanded);
    }

    return router.push(path);
  };
  const isActive = useMemo(() => {
    if (items && items.length > 0) {
      if (items.find((item) => item.path === pathname)) {
        setExpanded(true);
        return true;
      }
    }

    return path === pathname;
  }, [items, path, pathname]);

  return (
    <div className='transition-all duration-500'>
      <div
        className={`flex transition-all duration-500 items-center p-3 rounded-lg hover:bg-sidebar-background cursor-pointer ${color.primaryText} hover:text-white justify-between
     ${isActive && 'text-sidebar-active bg-sidebar-background'}
    `}
        onClick={onClick}
      >
        <div className="flex items-center space-x-2">
          <Icon size={20} />
          <p className="text-sm font-semibold">{name} </p>
        </div>
        <div
          className={`transition-all duration-500 ${
            expanded ? 'rotate-180' : ''
          }`}
        >
          {items && items.length > 0 && <ChevronDown size={18} />}
        </div>
      </div>

      {/* Old Code Map SubItemMenu */}
      {/* {expanded && items && items.length > 0 && (
        <div className="flex transition-all duration-500 flex-col space-y-1 ml-10">
          {items.map((item) => (
            <SubMenuItem key={item.path} item={item} />
          ))}
        </div>
      )} */}

      {/* New Code Map SubItemMenu with Animation */}
      <div className={`overflow-hidden transition-all duration-500 flex ${expanded ? `h-[calc(${30*item?.length}px)]` : "h-0"}`}>
        <div
          className={`flex relative transition-all duration-500 ${
            expanded ? '' : 'translate-y-[-70px]'
          } flex-col space-y-1 ml-10`}
        >
          {items?.map((item) => <SubMenuItem key={item.path} item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default SidebarItem;
