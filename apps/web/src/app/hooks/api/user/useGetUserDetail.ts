import { useAppDispatch } from '@/app/redux/hook';
import { axiosInstance } from '@/lib/axios';

const useGetUserDetail = () => {
  const getUserDetail = async (userId: number) => {
    try {
      const { data } = await axiosInstance.get(`/user/${userId}`);
      return data;
    } catch (err) {
      throw err;
    }
  };
  return { getUserDetail };
};

export default useGetUserDetail;
