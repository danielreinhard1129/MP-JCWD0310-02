import { axiosInstance } from '@/app/lib/axios';
import { useAppSelector } from '@/app/redux/hook';
import { useState } from 'react';

const useGetOrganizerDataStatistic = () => {
  const { userId } = useAppSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  const getOrganizerDataStatistic = async () => {
    try {
      const { data } = await axiosInstance.get(`/user/transaction/${userId}`);
      return data;
    } catch (err) {}
  };
  return { getOrganizerDataStatistic };
};

export default useGetOrganizerDataStatistic;
