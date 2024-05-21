'use client';
import { axiosInstance } from '@/app/lib/axios';
import {
  Event,
  Transaction,
  TransactionUserReward,
} from '@/app/types/event.type';
import { User } from '@/app/types/user.type';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

interface TransactionDetailResponse {
  data: TransactionDetail;
  message: string;
}

interface TransactionDetail extends Transaction {
    event: Event;
    user: User;
    transactionUserReward: TransactionUserReward[];
}

export const useGetTransactionDetail = (uuid: string) => {
  const [data, setData] = useState<TransactionDetail>();
  const [isLoading, setIsLoading] = useState(true);
  const getTransactionDetail = async () => {
    try {
      const response = await axiosInstance.get<TransactionDetailResponse>(
        `/user/transaction/${uuid}`,
      );
      setData(response.data.data);
    } catch (error) {
      if (error instanceof AxiosError) {
      }
    }
  };
  useEffect(() => {
    getTransactionDetail();
  }, []);
  useEffect(() => {
    setIsLoading(false);
  }, [data]);

  return { data, isLoading, getTransactionDetail };
};
