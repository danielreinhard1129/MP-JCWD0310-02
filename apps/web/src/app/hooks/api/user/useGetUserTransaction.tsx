import { useAppDispatch, useAppSelector } from '@/app/redux/hook';
import { axiosInstance } from '@/lib/axios';

const useGetUserTransaction = () => {
  const { userId } = useAppSelector((state) => state.user);
  const getUserDetail = async () => {
    try {
      const { data } = await axiosInstance.get(`/user/transaction/${userId}`);
      // dispatch(getUserDetail());
      return data;
    } catch (err) {
      throw err;
    }
  };
  return { getUserDetail };
};

export default useGetUserTransaction;
