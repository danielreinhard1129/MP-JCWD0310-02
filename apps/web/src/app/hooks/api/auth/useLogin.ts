import { axiosInstance } from '@/app/lib/axios';
import { useAppDispatch } from '@/app/redux/hook';
import { loginAction } from '@/app/redux/slices/userSlice';
import { User } from '@/app/types/user.type';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

interface LoginResponse {
  message: string;
  data: User;
  token: string;
}

interface LoginPayloadArg extends Pick<User, 'email' | 'password'> {}

const useLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const login = async (payload: LoginPayloadArg) => {
    try {
      const { data } = await axiosInstance.post<LoginResponse>(
        '/auth/login',
        payload,
      );
      dispatch(loginAction(data.data));
      localStorage.setItem('token', data.token);
      router.replace('/');
    } catch (err) {
      if (err instanceof AxiosError) {
        alert(JSON.stringify(err?.response?.data));
      }
    }
  };
  return { login };
};

export default useLogin;
