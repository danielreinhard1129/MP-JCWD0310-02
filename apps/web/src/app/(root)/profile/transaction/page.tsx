'use client';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

const TransactionDetailPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col md:px-8 px-2 md:gap-8 gap-2 md:py-8 items-center min-h-screen bg-[#fbfbf8]">
      <div className="w-full flex flex-col py-4 items-center justify-center border-b-2 border-slate-300">
        <h1 className="text-2xl text-indigo-950">Your Transaction List</h1>
      </div>
      <div className="w-full flex flex-row py-4 justify-between">
        <Button
          onClick={() => {
            router.back();
          }}
          className="md:text-lg text-[#ffff00]"
        >
          Back to Profile
        </Button>
      </div>

      <section className="flex flex-col gap-4 w-full h-full">
        <div className="bg-slate-300 rounded-lg w-full px-4 py-4 flex justify-between flex-row">
          <h1>DWP Jogjakarta</h1>
          <div className="flex flex-row justify-center items-center gap-2">
            <h1>Status :</h1>
            <Check className="text-teal-700" />
            <h1>Done</h1>
          </div>
          <div>
            <h1>Date : 15 Mei 2024</h1>
          </div>
        </div>
        <div className="bg-slate-300 rounded-lg w-full px-4 py-4 flex justify-between flex-row">
          <h1>DWP Jogjakarta</h1>
          <div className="flex flex-row justify-center items-center gap-2">
            <h1>Status :</h1>
            <Check className="text-yellow-500" />
            <h1>Pending</h1>
          </div>
          <div>
            <h1>Date : 15 Mei 2024</h1>
          </div>
        </div>
        <div className="bg-slate-300 rounded-lg w-full px-4 py-4 flex justify-between flex-row">
          <h1>DWP Jogjakarta</h1>
          <div className="flex flex-row justify-center items-center gap-2">
            <h1>Status :</h1>
            <Check className="text-red-700" />
            <h1>Canceled</h1>
          </div>

          <div>
            <h1>Date : 15 Mei 2024</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TransactionDetailPage;
