'use client';
import { useAppDispatch } from '@/app/redux/hook';
import { logoutAction } from '@/app/redux/slices/userSlice';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const useLogout = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const logout = async () => {
    try {
      dispatch(logoutAction());
      localStorage.removeItem('token');
      toast.success('Succes log out!');
      setTimeout(() => {
        router.replace('/');
      }, 1000);
    } catch (err) {
      toast.error('Something error');
    }
  };
  return { logout };
};

export default useLogout;
