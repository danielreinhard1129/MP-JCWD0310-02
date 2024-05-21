'use client';

import { Event } from '@/app/types/event.type';
import {
  IPaginationMeta,
  IPaginationQueries,
} from '@/app/types/pagination.type';
import { axiosInstance } from '@/lib/axios';
import { useEffect, useState } from 'react';

interface IGetEventHistoryQuery extends IPaginationQueries {
  search?: string;
  filter?: string;
  userId: number;
}

interface Transaction {
  id: number;
  uuid: string;
  status: string;
  qty: number | null;
  paymentProof: number;
  total: number;
  pointUsed: number;
  createdAt: Date;
  updatedAt: Date;
  eventId: number;
  userId: number;
  event: Event;
}

interface TransactionResponse {
  data: Transaction[];
  meta: IPaginationMeta;
}

const useGetUserTransactionHistory = (queries: IGetEventHistoryQuery) => {
  const [data, setData] = useState<Transaction[]>([]);
  const [meta, setMeta] = useState<IPaginationMeta | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getUserEventHistory = async () => {
    try {
      const { data } = await axiosInstance.get<TransactionResponse>(
        '/user/transaction',
        {
          params: queries,
        },
      );
      setData(data.data);
      setMeta(data.meta);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserEventHistory();
  }, [queries.page, queries?.search, queries?.filter]);
  return { data, meta, isLoading };
};

export default useGetUserTransactionHistory;
