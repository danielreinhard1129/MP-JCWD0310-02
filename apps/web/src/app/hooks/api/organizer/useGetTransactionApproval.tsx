import { axiosInstance } from '@/app/lib/axios';
import { useAppSelector } from '@/app/redux/hook';
import { Event , Transaction } from '@/app/types/event.type';
import { useEffect, useState } from 'react';

interface EventResponse {
  title : string;
  transaction : Transaction[];
}

interface Response {
    data : EventResponse[];
}

const useGetTransactionApproval = () => {
  const { userId } = useAppSelector((state) => state.user);
  const [data, setData] = useState<EventResponse[]>();
  const [isLoading, setIsLoading] = useState(false);
  const getTransactionApproval = async () => {
    try {
      setIsLoading(true);
      const data = await axiosInstance.get<Response>(
        `/organizer/transaction/${userId}`,
      );
      if (data) {
        setData(data.data.data);
      }
    } catch (err) {}
  };

  useEffect(() => {
    getTransactionApproval();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [data]);

  return { data, isLoading };
};

export default useGetTransactionApproval;
