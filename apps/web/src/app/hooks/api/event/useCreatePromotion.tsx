import { useState } from 'react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';

import { axiosInstance } from '@/lib/axios';
import { IFormCreatePromotion, Promotion } from '@/app/types/promotion.type';

const useCreatePromotion = () => {
  const router = useRouter();

  const createPromotion = async (payload: IFormCreatePromotion) => {
    try {
      const { code, discount, startDate, endDate, maxUses, eventId } = payload;

      const createPromotionForm = new FormData();

      for (const [key, value] of Object.entries(payload)) {
        console.log('key', key);
        console.log('value', value);
      }

      createPromotionForm.append('code', String(code));
      createPromotionForm.append('discount', String(discount));
      createPromotionForm.append('startDate', String(startDate));
      createPromotionForm.append('endDate', String(endDate));
      createPromotionForm.append('maxUses', String(maxUses));
      createPromotionForm.append('eventId', String(eventId));

      await axiosInstance.post<Promotion>('/event', createPromotionForm);
      // toast success here 👇👇👇
      router.push(`/organizer-dashboard`);;
    } catch (error) {
      if (error instanceof AxiosError) {
        // TODO: replace log with toast
        console.log(error);
      }
    }
  };

  return { createPromotion };
};

export default useCreatePromotion;
