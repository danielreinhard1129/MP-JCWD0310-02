'use client';
import VoucherCard from '@/app/components/VoucherCard';
import { NeedAuthenticationGuard } from '@/app/hoc/AuthGuard';
import useGetUserVoucher from '@/app/hooks/api/user/useGetUserVoucher';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface VoucherResponse {
  data: {
    userReward: {}[];
    userVoucher: {
      id: number;
      isUsed: boolean;
      createdAt: Date;
      updateAt: Date;
      userId: number;
      voucherId: number;
      voucher: {
        code: string;
        endDate: Date;
        eventId: number;
        id: number;
        nominal: number;
        isClaim: boolean;
        limit: number;
        startDate: Date;
        updateAt: Date;
        userId: number;
      };
    }[];
  }[];
}

const VoucherPage = () => {
  const router = useRouter();
  const [data, setData] = useState<VoucherResponse>();
  const { getUserVoucher } = useGetUserVoucher();

  const fetchVoucherData = async () => {
    const voucher = await getUserVoucher();
    return voucher;
  };

  useEffect(() => {
    const dataVoucher = fetchVoucherData();
    dataVoucher.then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

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
      <div className="h-full bg-slate-200 flex flex-col gap-4 rounded-2xl md:p-8 p-2">
        {data?.data[0].userVoucher.map((val, ind, arr) => {
          return (
            <VoucherCard
              description={val.voucher.code}
              endDate={val.voucher.endDate}
              maxUsage={formattedPrice.format(val.voucher.limit)}
              percentage={val.voucher.nominal}
              voucherCode={val.voucher.code}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NeedAuthenticationGuard(VoucherPage);
