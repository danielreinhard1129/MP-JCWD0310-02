import { useAppSelector } from '@/app/redux/hook';
import { IFormCreateReview, Review } from '@/app/types/review.type';
import { axiosInstance } from '@/lib/axios';

import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation'
import React from 'react'

const useCreateReviews = () => {
    const { userId } = useAppSelector((state) => state.user);
    const router = useRouter();
    const createReview = async (payload: IFormCreateReview) => {
        try {
            const {
                rating,
                review,
                createdAt,
                eventId
            } = payload;

            const createReviewForm = new FormData();

            createReviewForm.append('rating', String(rating));
            createReviewForm.append('review', review);
            createReviewForm.append('eventId', String(eventId));
            createReviewForm.append('createdAt', String(new Date()));
            createReviewForm.append('userId', String(userId));


            await axiosInstance.post<Review>(`/review`, payload )
            router.push('/');
        } catch (error) {
            if (error instanceof AxiosError) {
                console.log(error);
            }
        }
    }
  return { createReview }
}

export default useCreateReviews;