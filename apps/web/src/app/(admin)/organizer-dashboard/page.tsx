'use client';

import RoleGuard from '@/app/hoc/RoleGuard';
import Forminput from '@/components/Forminput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormik } from 'formik';
import Image from 'next/image';
const OrganizerDashboardPage = () => {
  return (
    <main className="relative border-4 p-4 rounded-lg bg-gray-200 w-full h-full  overflow-scroll">
      <div className="grid md:grid-cols-[repeat(4,minmax(max-content,100%))] md:grid-rows-[repeat(6,minmax(max-content,100%))] sm:grid-cols-1 sm:grid-rows-1  gap-4">
        <div
          id="statisticCashFlow"
          className="bg-blue-400 rounded-xl md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-1 "
        >
          <div className="justify-center flex flex-col text-center h-full w-full rounded-xl p-4">
            <h1>Total Event Sold</h1>
            <div className="w-full h-full flex justify-center">
              <Image
                src="/chartImage.jpg"
                alt="chartImage"
                className="w-full"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>

        <div
          id="totalEventSold"
          className="bg-red-400 rounded-xl md:col-span-2 sm:col-span-1 sm:row-span-1"
        >
          <div className="justify-center flex flex-col text-center h-full w-full rounded-xl p-4">
            <h1>Total Event Sold</h1>
            <div className="w-full h-full flex justify-center">
              <Image
                src="/chartImage.jpg"
                alt="chartImage"
                className="w-40"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>

        <div
          id="totalEventSuccess"
          className="bg-blue-400 rounded-xl md:col-span-2 sm:col-span-1 sm:row-span-1"
        >
          <div className="justify-center flex flex-col text-center h-full w-full rounded-xl p-4">
            <h1>Total Event Sold</h1>
            <div className="w-full h-full flex justify-center">
              <Image
                src="/chartImage.jpg"
                alt="chartImage"
                className="w-40"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>

        <div
          id="statisticEvent"
          className="bg-red-400 rounded-xl md:col-span-4 md:row-span-2 sm:col-span-1 sm:row-span-1"
        >
          <div className="justify-center flex flex-col text-center h-full w-full rounded-xl p-4">
            <h1>Total Event Sold</h1>
            <div className="w-full h-full flex justify-center">
              <Image
                src="/chartImage.jpg"
                alt="chartImage"
                className="w-full"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        {/* <div className='bg-blue-400 rounded-xl'></div>
        <div className='bg-red-400 rounded-xl'></div>
        <div className='bg-blue-400 rounded-xl'></div>
        <div className='bg-red-400 rounded-xl'></div> */}
      </div>
    </main>
  );
};
export default RoleGuard(OrganizerDashboardPage);
