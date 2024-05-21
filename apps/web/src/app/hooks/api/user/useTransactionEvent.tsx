import { axiosInstance } from '@/app/lib/axios';
import { AxiosError } from 'axios';

interface CreateUserTransaction {
  eventId: number;
  qty: number;
  voucherId: number | null;
  rewardId: number | null;
  userId: number | null;
}

export const useCreateTransactionEvent = () => {
  const createTransactionEvent = async (body: CreateUserTransaction) => {
    try {
      const response = await axiosInstance.post(
        `/user/event/transaction`,
        body,
      );
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
      }
    }
  };

  return { createTransactionEvent };
};
