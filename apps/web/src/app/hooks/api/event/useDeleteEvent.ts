'use client';

import { Event } from '@/app/types/event.type';
import { axiosInstance } from '@/lib/axios';

import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

const useDeleteEvent = () => {
  const [isLoading, setIsLoading] = useState(true);

  const deleteEvent = async (userId: number, eventId: number) => {
    try {
      const payload = {
        userId,
        eventId,
      };
      const { data } = await axiosInstance.delete(`/event/${eventId}`, {
        data: payload,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        // TODO: replace console.log with toast
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { deleteEvent };
};

export default useDeleteEvent;
