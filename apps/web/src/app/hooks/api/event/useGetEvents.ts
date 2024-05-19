'use client';

import { Event } from '@/app/types/event.type';
import {
  IPaginationMeta,
  IPaginationQueries,
} from '@/app/types/pagination.type';
import { axiosInstance } from '@/lib/axios';
import { useEffect, useState } from 'react';

interface IGetEventsQuery extends IPaginationQueries {
  search?: string;
}

const useGetEvents = (queries: IGetEventsQuery) => {
  const [data, setData] = useState<Event[]>([]);
  const [meta, setMeta] = useState<IPaginationMeta | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getEvents = async () => {
    try {
      const { data } = await axiosInstance.get('/event', {
        params: queries,
      });

      setData(data.data);
      setMeta(data.meta);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getEvents();
  }, [queries.page, queries?.search]);
  return { data, meta, isLoading };
};

export default useGetEvents;
