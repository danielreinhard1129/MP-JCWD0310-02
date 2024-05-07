import { axiosInstance } from '@/app/lib/axios';
import { User } from '@/app/types/user.type';
import axios, { AxiosError } from 'axios';
import {useRouter} from 'next/navigation';

interface LoginPayloadArg extends Pick<User, 'email' | 'password'> {}

const useLogin = () => {
  const router = useRouter();
  const login = async (payload: LoginPayloadArg) => {
    const { password, email } = payload;
    try {
      const { data } = await axiosInstance.post('/auth/login', payload);
      localStorage.setItem('userId', data.data.id);
      localStorage.setItem('token', data.token);
      router.push('/');
    } catch (err) {
      if (err instanceof AxiosError) {
        alert(JSON.stringify(err?.response?.data));
      }
    }
  };
  return { login };
};

export default useLogin;
