import { IFormCreatePromotion } from '@/app/types/promotion.type';
import axios, { AxiosError } from 'axios';


export const useCreatePromotion = () => {

  const createPromotion = async (formData: IFormCreatePromotion) => {
    try {
      const response = await axios.post('/api/promotions', formData);
      return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
          // replace log with toast
      }
    }
  };

  return { createPromotion };
};
