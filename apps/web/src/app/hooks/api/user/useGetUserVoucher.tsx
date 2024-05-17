import { useAppDispatch, useAppSelector } from '@/app/redux/hook';
import { axiosInstance } from '@/lib/axios';
interface VoucherResponse {
  data: {
    userReward: {}[];
    userVoucher: {
      id: number;
      isUsed: boolean;
      createdAt: Date;
      updateAt: Date;
      userId: number;
      voucherId: number;
      voucher: {
        code: string;
        endDate: Date;
        eventId: number;
        id: number;
        nominal :number;
        isClaim: boolean;
        limit: number;
        startDate: Date;
        updateAt: Date;
        userId: number;
      };
    }[];
  }[];
}
const useGetUserVoucher = () => {
  const userId = useAppSelector((state) => state.user.userId);
  const getUserVoucher = async () => {
    try {
      const { data } = await axiosInstance.get<VoucherResponse>(
        `/user/voucher/${userId}`,
      );
      return data;
    } catch (err) {
      throw err;
    }
  };
  return { getUserVoucher };
};

export default useGetUserVoucher;
