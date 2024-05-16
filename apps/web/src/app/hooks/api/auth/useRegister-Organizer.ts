import { axiosInstance } from '@/app/lib/axios';
import { User } from '@/app/types/user.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

interface RegisterOrganizerArg
  extends Pick<User, 'firstName' | 'lastName' | 'email' | 'role'> {}

const useRegisterOrganizer = () => {
  const router = useRouter();

  const register = async (payload: RegisterOrganizerArg) => {
    try {
      await axiosInstance.post('/auth/register-organizer', payload);
      toast.success(
        'Success register as organizer! you will redirect to login',
      );
      setTimeout(() => {
        router.push('/login');
      }, 1000);
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error('Something error with the server');
      }
    }
  };
  return { register };
};

export default useRegisterOrganizer;
