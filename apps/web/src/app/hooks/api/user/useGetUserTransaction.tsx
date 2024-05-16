import { useAppDispatch } from '@/app/redux/hook';
import { axiosInstance } from '@/lib/axios';

const useGetUserTransaction = () => {
  const dispatch = useAppDispatch();
  const getUserDetail = async (userId: number) => {
    try {
      const { data } = await axiosInstance.get(`/user/${userId}`);
      // dispatch(getUserDetail());
      return data;
    } catch (err) {
      throw err;
    }
  };
  return { getUserDetail };
};

export default useGetUserTransaction;
