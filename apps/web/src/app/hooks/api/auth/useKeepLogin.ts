'use client';
import { axiosInstance } from '@/app/lib/axios';
import { useAppDispatch } from '@/app/redux/hook';
import { loginAction, logoutAction } from '@/app/redux/slices/userSlice';
import { User } from '@/app/types/user.type';

interface KeepLoginResponseData extends User {
  id: number;
}
interface KeepLoginResponse {
  message: string;
  data: KeepLoginResponseData;
}

const useKeepLogin = () => {
  const dispatch = useAppDispatch();
  const keepLogin = async () => {
    try {
      const { data } =
        await axiosInstance.post<KeepLoginResponse>('/auth/keep-login');
      dispatch(loginAction(data.data));
    } catch (err) {
      localStorage.removeItem('token');
      dispatch(logoutAction());
    }
  };

  return { keepLogin };
};

export default useKeepLogin;
