import { axiosInstance } from '@/app/lib/axios';
import { useAppSelector } from '@/app/redux/hook';
import { Event, Transaction } from '@/app/types/event.type';
import { useEffect, useState } from 'react';

interface Payload {
  uuid: string;
  status: string;
}

const useApprovalAction = () => {
  const { userId } = useAppSelector((state) => state.user);
  const approvalAction = async (body: Payload) => {
    try {
      const data = await axiosInstance.post(`/organizer/transaction/approval`, {
        ...body,
        userId,
      });
      return data;
    } catch (err) {
      throw err;
    }
  };
  return { approvalAction };
};

export default useApprovalAction;
