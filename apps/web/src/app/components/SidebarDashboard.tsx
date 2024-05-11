'use client';
import {
  ArrowLeft,
  BarChart3,
  GanttChart,
  Home,
  TicketPlus,
} from 'lucide-react';
import React, { useState } from 'react';

const SidebarDashboard = () => {
  const [open, setOpen] = useState(false);

  const handleOpenSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <aside className="relative">

        {/* Sticky sidebar */}
        <div className="absolute py-4 w-[70px] z-50 text-[#ffff00] bg-indigo-950 min-h-[90vh]">
          
          <div className="flex w-full h-16 pt-4 justify-center transition-all duration-500" onClick={handleOpenSidebar}>
            <div className={`border-b-2 w-full pb-[20px] flex justify-center transition-all duration-500 ${open ? "" : "border-[#ffff00]" }`}>
              <div className={`${open ? 'rotate-scale-x-0' : 'scale-x-[-1]'} transition-all duration-500 `}>
                <ArrowLeft className={`hover:cursor-pointer transition-all duration-500 ${open ? "" : "" }`}/>
              </div>
            </div>
          </div>
          
          <div className="flex w-full h-14 pt-4 justify-center">
            <div className="w-full pb-[20px] flex justify-center">
              <TicketPlus className='hover:cursor-pointer'/>
            </div>
          </div>
          
          <div className="flex w-full h-14 pt-4 justify-center">
            <div className="w-full pb-[20px] flex justify-center">
              <GanttChart className='hover:cursor-pointer'/>
            </div>
          </div>
          
          <div className="flex w-full h-14 pt-4 justify-center">
            <div className="w-full pb-[20px] flex justify-center">
              <BarChart3 className='hover:cursor-pointer'/>
            </div>
          </div>

        </div>

        {/* Colapsed sidebar */}
        <div className={`absolute py-4 transition-all duration-500 ${open ? "ml-[70px]" : "ml-[-170px]"} w-[200px] z-40 bg-indigo-900 min-h-[90vh]`}>
          
        <div className="flex w-full h-16 pt-4 px-4 justify-center hover:cursor-pointer">
            <div className="w-full pb-[20px]">
              <p className='font-semibold text-[#ffff00]'>Dashboard</p>
            </div>
          </div>
          
          <div className="flex w-full h-14 pt-4 px-4 justify-center hover:cursor-pointer">
            <div className="w-full pb-[20px]">
              <p className='font-semibold text-[#ffff00]'>Create Event</p>
            </div>
          </div>
          
          <div className="flex w-full h-14 pt-4 px-4 justify-center hover:cursor-pointer">
            <div className="w-full pb-[20px]">
              <p className='font-semibold text-[#ffff00]'>Manage Event</p>
            </div>
          </div>
          
          <div className="flex w-full h-14 pt-4 px-4 justify-center hover:cursor-pointer">
            <div className="w-full pb-[20px]">
              <p className='font-semibold text-[#ffff00]'>Statistic Event</p>
            </div>
          </div>

        </div>

      </aside>
    </>
  );
};

export default SidebarDashboard;
