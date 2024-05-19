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

const useGetUserEventHistory = (queries: IGetEventHistoryQuery) => {
  const [data, setData] = useState<Event[]>([]);
  const [meta, setMeta] = useState<IPaginationMeta | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getUserEventHistory = async () => {
    try {
      const { data } = await axiosInstance.get('/user/events', {
        params: queries,
      });

      setData(data.data);
      setMeta(data.meta);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserEventHistory();
  }, [queries.page, queries?.search, queries?.filter]);
  return { data, meta, isLoading };
};

export default useGetUserEventHistory;
