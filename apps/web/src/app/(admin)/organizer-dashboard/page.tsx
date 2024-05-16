'use client';

import ChartBarStatistic from '@/app/components/ChartBarStatistic';
import { useAppSelector } from '@/app/redux/hook';
import { Button } from '@/components/ui/button';
import { Check, User, Wallet } from 'lucide-react';
import Image from 'next/image';

const OrganizerDashboardPage = () => {
  const user = useAppSelector((state) => state.user);

  const data = [{ name: 'Ticket Sold', data: [10, 20, 13, 14, 27, 56, 23] }];
  const categories = [
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu',
    'Minggu',
  ];

  return (
    <main className="relative border-4 p-4 rounded-lg bg-gray-200 w-full h-full  overflow-scroll">
      <div className="grid grid-cols-[repeat(3,1fr)] grid-rows-[repeat(5,1fr)] row gap-4">
        
        <div
          id="statisticCashFlow"
          style={{
            gridArea: '1 / 1 / 3 / 3',
          }}
          className="rounded-xl bg-indigo-950 py-2 px-2 flex flex-col justify-center items-center"
        >
          <h1 className="text-[#ffff00] font-semibold">
            Total Ticket in All Event
          </h1>
          <div className="w-full">
            <ChartBarStatistic data={data} categoriesProps={categories} />
          </div>
          <p className='text-[#ffff00] text-center'>This chart is shown all sold ticket in all of your event include all status.pending and success</p>
        </div>

        <div
          style={{
            gridArea: '1 / 3 / 2 / 4',
          }}
          className="col-span-1 row-span-1 px-4 py-8 flex flex-col justify-between  items-center gap-4 rounded-xl bg-indigo-950"
        >
          <h1 className="text-[#ffff00] font-semibold">
            Overall Attendance
          </h1>
          <h1 className="text-[#ffff00] flex flex-row gap-4 items-center text-2xl font-semibold">
            2.500
          </h1>
          <div>
            <User className="w-28 h-28 text-[#ffff00]" />
          </div>
          <p className='text-[#ffff00] text-center'>This is total all registrant and all Event</p>
        </div>

        <div
          style={{
            gridArea: '2 / 3 / 3 / 4',
          }}
          className="col-span-1 row-span-1 px-4 py-8 flex flex-col justify-between  items-center gap-4 rounded-xl bg-indigo-950"
        >
          <h1 className="text-[#ffff00] font-semibold">Total Transaction</h1>
          <h1 className="text-[#ffff00] flex flex-row gap-4 items-center text-2xl font-semibold">
            267 <Check />
          </h1>
          <div>
            <Wallet className="w-28 h-28 text-[#ffff00]" />
          </div>
          <p className='text-[#ffff00] text-center'>All transaction in all of your Event till Now</p>
        </div>

        <div
          style={{
            gridArea: '3 / 1 / 5 / 4',
          }}
          className="w-full h-full rounded-xl bg-indigo-950"
        >
          <div className="flex flex-col text-center py-8 overflow-scroll h-full">
            <h1 className="text-2xl text-[#ffff00] font-bold">
              Statistic CashFlow
            </h1>
            <div>
              <ChartBarStatistic data={data} categoriesProps={categories} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default OrganizerDashboardPage;
