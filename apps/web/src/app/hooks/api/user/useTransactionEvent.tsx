import { axiosInstance } from '@/app/lib/axios';
import { AxiosError } from 'axios';

interface CreateUserTransaction {
  eventId: number;
  uuid: string;
  qty: number;
  total: number;
  paymentProof: string;
  voucherId: number;
  userId: number;
}

export const useCreateTransactionEvent = () => {
  const createTransactionEvent = async (body: CreateUserTransaction) => {
    try {
      const response = await axiosInstance.post(
        `/user/event/${body.eventId}`,
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
