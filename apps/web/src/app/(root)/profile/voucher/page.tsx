'use client';
import VoucherCard from '@/app/components/VoucherCard';
import { Button } from '@/components/ui/button';
import { List } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const VoucherPage = () => {
  const router = useRouter();
  const [voucher,setVoucher] = useState([]);

  return (
    <div className="flex flex-col md:px-8 px-2 md:gap-8 gap-2 md:py-8 items-center min-h-screen bg-[#fbfbf8]">
      <div className="w-full flex flex-col py-4 items-center justify-center border-b-2 border-slate-300">
        <h1 className="text-2xl text-indigo-950">Your Voucher List</h1>
      </div>
      <div className="w-full flex flex-row justify-between">
        <Button
          onClick={() => {
            router.back();
          }}
          className="md:text-lg text-[#ffff00]"
        >
          Back to Profile
        </Button>
      </div>
      <div className="h-full bg-slate-200 flex flex-col gap-4 rounded-2xl md:p-8 p-4">
        
        <VoucherCard description='off in all event' endDate={new Date()} maxUsage='15' percentage={10} voucherCode='Hesoyam' />

        <VoucherCard description='off in all event' endDate={new Date()} maxUsage='15' percentage={10} voucherCode='Hesoyam' />

        <VoucherCard description='off in all event' endDate={new Date()} maxUsage='15' percentage={10} voucherCode='Hesoyam' />

        <VoucherCard description='off in all event' endDate={new Date()} maxUsage='15' percentage={10} voucherCode='Hesoyam' />
        
      </div>
    </div>
  );
};

export default VoucherPage;
