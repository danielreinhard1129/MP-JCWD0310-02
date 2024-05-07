'use client';
import { axiosInstance } from '@/app/lib/axios';
import { useAppDispatch } from '@/app/redux/hook';
import { loginAction } from '@/app/redux/slices/userSlice';
import { User } from '@/app/types/user.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

interface LoginArgs extends Pick<User, 'email' | 'password'> {}

interface LoginResponse {
  message: string;
  token: string;
  data: User;
}

export const useLogin = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const login = async (payload: LoginArgs) => {
    try {
      const { data } = await axiosInstance.post<LoginResponse>('/auth/login', {
        payload,
      });

      dispatch(loginAction(data.data));
      localStorage.setItem('token', data.token);
      localStorage.setItem('id' , "1");
      // localStorage.setItem('user' , data.data);
      // localStorage.setItem('user' , data.data);
      // localStorage.setItem('user' , data.data);
      // localStorage.setItem('user' , data.data);
      // localStorage.setItem('user' , data.data);
      // localStorage.setItem('user' , data.data);
      // localStorage.setItem('user' , data.data);
      // localStorage.setItem('user' , data.data);
      // localStorage.setItem('user' , data.data);
      // localStorage.setItem('user' , data.data);
      // localStorage.setItem('user' , data.data);
      // localStorage.setItem('user' , data.data);
      // localStorage.setItem('user' , data.data);
      router.replace('/');
    } catch (err) {
      if (err instanceof AxiosError) {
        alert(err?.response?.data);
      }
    }
  };

  return { login };
};
