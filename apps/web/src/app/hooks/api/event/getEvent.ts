import { Event } from '@/app/types/event.type';
import { IPaginationMeta, IPaginationQueries } from '@/app/types/pagination.type';
import { axiosInstance } from '@/lib/axios';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

interface IGetBlogsQuery extends IPaginationQueries {
  search?: string;
}
const getEventAll = (queries: IGetBlogsQuery) => {
  const [data, setData] = useState<Event[]>([]);
  const [meta, setMeta] = useState<IPaginationMeta | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getEvents = async () => {
    try {
      const { data } = await axiosInstance.get('/events', {
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
  const getEvent = async () => {
    try {
      const { data } = await axiosInstance.get(`/events`);
      setData(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        // TODO: replace console.log with toast
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  useEffect(() => {
    getEvents();
  }, [queries.page, queries?.search]);
  return { data, meta, isLoading };
};

export default getEventAll;
