import { axiosInstance } from '@/app/lib/axios';
import { useAppDispatch } from '@/app/redux/hook';
import { loginAction } from '@/app/redux/slices/userSlice';
import { User } from '@/app/types/user.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface LoginPayloadArg {
  email: string;
  resetCode: string;
  newPassword: string;
}

const useForgotPassword = () => {
  const router = useRouter();
  const forgotPassword = async (payload: LoginPayloadArg) => {
    try {
      const { data } = await axiosInstance.post(
        '/auth/forgot-password',
        payload,
      );
      toast.success('Succes Reset Password!');
      setTimeout(() => {
        router.replace('/login');
      }, 1000);
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error('Something error with the server');
      }
    }
  };
  return { forgotPassword };
};

export default useForgotPassword;
