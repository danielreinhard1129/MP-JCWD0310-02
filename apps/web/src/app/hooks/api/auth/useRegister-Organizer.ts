import { axiosInstance } from '@/app/lib/axios';
import { User } from '@/app/types/user.type';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

interface RegisterOrganizerArg
  extends Pick<
    User,
    'firstName' | 'lastName' | 'email' | 'referralCode' | 'role'
  > {}

const useRegisterOrganizer = () => {
  const router = useRouter();

  const register = async (payload: RegisterOrganizerArg) => {
    try {
      await axiosInstance.post('/auth/register-organizer', payload);
      router.push('/login');
    } catch (err) {
      if (err instanceof AxiosError) {
        alert(JSON.stringify(err?.response?.data));
      }
    }
  };
  return { register };
};

export default useRegisterOrganizer;
