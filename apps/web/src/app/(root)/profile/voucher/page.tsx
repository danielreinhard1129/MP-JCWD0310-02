'use client';
import { Button } from '@/components/ui/button';
import { List } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const VoucherPage = () => {
    const router = useRouter();
  return (
    <div className="flex flex-col md:px-8 px-2 md:gap-8 gap-2 md:py-8 items-center h-screen bg-[#fbfbf8]">
      <div className="w-full flex flex-col py-4 items-center justify-center border-b-2 border-slate-300">
        <h1 className="text-2xl text-indigo-950">Your Voucher List</h1>
      </div>

      <div className="w-full flex flex-row justify-between">
        <Button onClick={()=>{router.back()}} className="md:text-lg text-[#ffff00]">Back to Profile</Button>
        {/* <Button className="md:min-w-40 flex flex-row gap-4 md:text-lg text-[#ffff00]">
          Filter <List />
        </Button> */}
      </div>

      <div className="h-full bg-slate-200 flex flex-col gap-4 rounded-2xl md:p-8 p-1">
        
        <div className="bg-indigo-950 md:p-4 p-2 md:w-[600px] h-[200px] flex rounded-2xl">
          <div className="md:gap-14 gap-2 flex flex-row w-full">
            <div className="md:text-3xl md:flex hidden justify-center items-center font-extrabold text-[#ffff00]">
              <h1 className='md:block hidden'>TuneTix</h1>
            </div>
            <div className="h-full w-full items-center flex md:gap-4 gap-2 md:text-base text-sm justify-center md:justify-normal flex-row text-[#ffff00]">
              <div>
                <p>Voucher Discount Percentage :</p>
                <p>Voucher Expired :</p>
                <p>Voucher Code :</p>
              </div>
              <div>
                <p>10%</p>
                <p>10 January 2024</p>
                <p>TuneTixPassowrdnya</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-950 md:p-4 p-2 md:w-[600px] h-[200px] flex rounded-2xl">
          <div className="md:gap-14 gap-2 flex flex-row w-full">
            <div className="md:text-3xl md:flex hidden justify-center items-center font-extrabold text-[#ffff00]">
              <h1 className='md:block hidden'>TuneTix</h1>
            </div>
            <div className="h-full w-full items-center flex md:gap-4 gap-2 md:text-base text-sm justify-center md:justify-normal flex-row text-[#ffff00]">
              <div>
                <p>Voucher Discount Percentage :</p>
                <p>Voucher Expired :</p>
                <p>Voucher Code :</p>
              </div>
              <div>
                <p>10%</p>
                <p>10 January 2024</p>
                <p>TuneTixPassowrdnya</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-950 md:p-4 p-2 md:w-[600px] h-[200px] flex rounded-2xl">
          <div className="md:gap-14 gap-2 flex flex-row w-full">
            <div className="md:text-3xl md:flex hidden justify-center items-center font-extrabold text-[#ffff00]">
              <h1 className='md:block hidden'>TuneTix</h1>
            </div>
            <div className="h-full w-full items-center flex md:gap-4 gap-2 md:text-base text-sm justify-center md:justify-normal flex-row text-[#ffff00]">
              <div>
                <p>Voucher Discount Percentage :</p>
                <p>Voucher Expired :</p>
                <p>Voucher Code :</p>
              </div>
              <div>
                <p>10%</p>
                <p>10 January 2024</p>
                <p>TuneTixPassowrdnya</p>
              </div>
            </div>
          </div>
        </div>

        

        {/* <div className="bg-indigo-950 p-4 flex rounded-2xl min-h-32">
          <div className="gap-14 flex flex-row w-full">
            <div className="text-3xl flex justify-center items-center font-extrabold text-[#ffff00]">
              <h1>TuneTix</h1>
            </div>
            <div className="h-full w-full items-center flex gap-4 flex-row text-[#ffff00]">
              <div>
                <p>Voucher Discount Percentage :</p>
                <p>Voucher Expired :</p>
                <p>Voucher Code :</p>
              </div>
              <div>
                <p>10%</p>
                <p>10 January 2024</p>
                <p>TuneTixPassowrdnya</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-indigo-950 p-4 flex rounded-2xl min-h-32">
          <div className="gap-14 flex flex-row w-full">
            <div className="text-3xl flex justify-center items-center font-extrabold text-[#ffff00]">
              <h1>TuneTix</h1>
            </div>
            <div className="h-full w-full items-center flex gap-4 flex-row text-[#ffff00]">
              <div>
                <p>Voucher Discount Percentage :</p>
                <p>Voucher Expired :</p>
                <p>Voucher Code :</p>
              </div>
              <div>
                <p>10%</p>
                <p>10 January 2024</p>
                <p>TuneTixPassowrdnya</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-indigo-950 p-4 flex rounded-2xl min-h-32">
          <div className="gap-14 flex flex-row w-full">
            <div className="text-3xl flex justify-center items-center font-extrabold text-[#ffff00]">
              <h1>TuneTix</h1>
            </div>
            <div className="h-full w-full items-center flex gap-4 flex-row text-[#ffff00]">
              <div>
                <p>Voucher Discount Percentage :</p>
                <p>Voucher Expired :</p>
                <p>Voucher Code :</p>
              </div>
              <div>
                <p>10%</p>
                <p>10 January 2024</p>
                <p>TuneTixPassowrdnya</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-indigo-950 p-4 flex rounded-2xl min-h-32">
          <div className="gap-14 flex flex-row w-full">
            <div className="text-3xl flex justify-center items-center font-extrabold text-[#ffff00]">
              <h1>TuneTix</h1>
            </div>
            <div className="h-full w-full items-center flex gap-4 flex-row text-[#ffff00]">
              <div>
                <p>Voucher Discount Percentage :</p>
                <p>Voucher Expired :</p>
                <p>Voucher Code :</p>
              </div>
              <div>
                <p>10%</p>
                <p>10 January 2024</p>
                <p>TuneTixPassowrdnya</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-indigo-950 p-4 flex rounded-2xl min-h-32">
          <div className="gap-14 flex flex-row w-full">
            <div className="text-3xl flex justify-center items-center font-extrabold text-[#ffff00]">
              <h1>TuneTix</h1>
            </div>
            <div className="h-full w-full items-center flex gap-4 flex-row text-[#ffff00]">
              <div>
                <p>Voucher Discount Percentage :</p>
                <p>Voucher Expired :</p>
                <p>Voucher Code :</p>
              </div>
              <div>
                <p>10%</p>
                <p>10 January 2024</p>
                <p>TuneTixPassowrdnya</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-indigo-950 p-4 flex rounded-2xl min-h-32">
          <div className="gap-14 flex flex-row w-full">
            <div className="text-3xl flex justify-center items-center font-extrabold text-[#ffff00]">
              <h1>TuneTix</h1>
            </div>
            <div className="h-full w-full items-center flex gap-4 flex-row text-[#ffff00]">
              <div>
                <p>Voucher Discount Percentage :</p>
                <p>Voucher Expired :</p>
                <p>Voucher Code :</p>
              </div>
              <div>
                <p>10%</p>
                <p>10 January 2024</p>
                <p>TuneTixPassowrdnya</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default VoucherPage;
