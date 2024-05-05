import { axiosInstance } from '@/app/lib/axios';
import { User } from '@/app/types/user.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

interface RegisterArg extends Pick<User, 'email' | 'password' | 'userName'> {}

const useRegister = () => {
  const router = useRouter();

  const register = async (payload: RegisterArg) => {
    try {
      await axiosInstance.post('/auth/register', payload);
      router.push('/login');
    } catch (err) {
      if (err instanceof AxiosError) {
        alert(JSON.stringify(err?.response?.data));
      }
    }
  };
  return { register };
};

export default useRegister;
