import { axiosInstance } from '@/app/lib/axios';
import { User } from '@/app/types/user.type';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface RegisterArg
  extends Pick<User, 'firstName' | 'lastName' | 'email' | 'referralCode'> {}

const useRegister = () => {
  const router = useRouter();

  const register = async (payload: RegisterArg) => {
    try {
      await axiosInstance.post('/auth/register', payload);
      toast.success('Success register')
      setTimeout(()=> {
        router.push('/login');
      },1000)
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error('Something error with the server!');
      }
    }
  };
  return { register };
};

export default useRegister;
