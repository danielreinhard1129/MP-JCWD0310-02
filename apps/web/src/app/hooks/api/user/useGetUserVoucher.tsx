'use client';
import { useAppSelector } from '@/app/redux/hook';
import { axiosInstance } from '@/lib/axios';
import { useEffect, useState } from 'react';
interface VoucherResponse {
  data: {
    userReward: {
      id: number;
      isUsed: boolean;
      createdAt: Date;
      updateAt: Date;
      rewardId: number;
      userId: number;
      userReward: {
        id: number;
        title: string;
        description: string;
        percentage: number;
        max_nominal: string;
        startDate: Date;
        endDate: Date;
        createdAt: Date;
        updateAt: Date;
      }[];
    }[];
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
const useGetUserVoucher = () => {
  const userId = useAppSelector((state) => state.user.userId);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<VoucherResponse>();
  const getUserVoucher = async () => {
    try {
      const fetch = await axiosInstance
        .get(`/user/voucher/${userId}`)
        .then((e) => {
          setData(e.data);
        });
    } catch (err) {}
  };
  useEffect(() => {
    getUserVoucher();
  }, []);
  useEffect(() => {
    setIsLoading(false);
  }, [data]);

  return { data, isLoading };
};

export default useGetUserVoucher;
