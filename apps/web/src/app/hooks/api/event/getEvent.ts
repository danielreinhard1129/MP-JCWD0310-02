import { axiosInstance } from '@/app/lib/axios';
import { useAppDispatch } from '@/app/redux/hook';
import { loginAction } from '@/app/redux/slices/userSlice';
import { User } from '@/app/types/user.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

interface getEventArg {
  message: string;
  data: any;
}

const getEventAll = () => {
  const getEvent = async () => {
    try {
      const data = await axiosInstance.get<getEventArg>('/event');
      return data;
    } catch (err) {
      if (err instanceof AxiosError) {
        alert(JSON.stringify(err?.response?.data));
      }
    }
  };
  return { getEvent };
};

export default getEventAll;
