import { Review } from '@/app/types/review.type';
import { axiosInstance } from '@/lib/axios';

import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';

const useGetReview = (id: number) => {
  const [data, setData] = useState<Review | null>(null);

  const getReview = async () => {
    try {
      const { data } = await axiosInstance.get<Review>(`/reviews/${id}`);
      setData(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getReview();
  }, []);
  return { review: data, refetch: getReview };
};

export default useGetReview;