import { axiosInstance } from '@/app/lib/axios';
import { useAppDispatch } from '@/app/redux/hook';
import { loginAction } from '@/app/redux/slices/userSlice';
import { User } from '@/app/types/user.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface LoginPayloadArg extends Pick<User, 'email' | 'password'> {}

const useLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const login = async (payload: LoginPayloadArg) => {
    try {
      const { data } = await axiosInstance.post(
        '/auth/login',
        payload,
      );
      dispatch(loginAction(data.data));
      localStorage.setItem('token', data.token);
      toast.success('Succes login!');
      setTimeout(() => {
        router.replace('/');
      }, 1000);
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error('Something error with the server');
      }
    }
  };
  return { login };
};

export default useLogin;
