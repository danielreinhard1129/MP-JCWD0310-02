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

      const { id, role, token, userName } = data.data;

      dispatch(loginAction(data.data));
      localStorage.setItem('token', token);
      localStorage.setItem('userName', userName);
      localStorage.setItem('id', String(id));
      localStorage.setItem('role', role);
      router.replace('/');
    } catch (err) {
      if (err instanceof AxiosError) {
        alert(err?.response?.data);
      }
    }
  };

  return { login };
};
