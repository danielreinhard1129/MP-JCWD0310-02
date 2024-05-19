'use client';

import { useAppSelector } from '@/app/redux/hook';
import { IFormCreateEvent, Event } from '@/app/types/event.type';
import { axiosInstance } from '@/lib/axios';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { FileWithPath } from 'react-dropzone';

const useCreateEvent = () => {
  const router = useRouter();
  const {userId} = useAppSelector((state) => state.user);
  const createEvent = async (payload: IFormCreateEvent) => {
    try {
      const {
        title,
        description,
        thumbnail,
        startDate,
        endDate,
        price,
        city,
        country,
        booked,
        limit,
        category,
        time,
        address,
        province,
        isFree,
      } = payload;

      const createEventForm = new FormData();

        // for (const [key, value] of Object.entries(payload)) {
        //   console.log('key', key);
        //   console.log('value', value);
        // }

      createEventForm.append('userId', String(userId));
      createEventForm.append('title', title);
      createEventForm.append('description', description);
      createEventForm.append('price', String(price));
      createEventForm.append('address', address);
      createEventForm.append('province', province);
      createEventForm.append('city', city);
      createEventForm.append('country', country);
      createEventForm.append('startDate', String(startDate));
      createEventForm.append('endDate', String(endDate));
      createEventForm.append('time', String(time));
      createEventForm.append('limit', String(limit));
      createEventForm.append('booked', String(booked));
      createEventForm.append('category', category);
      createEventForm.append('isFree', String(isFree));

      thumbnail.forEach((file: FileWithPath) => {
        createEventForm.append('thumbnail', file);
      });

      await axiosInstance.post<Event>('/organizer', createEventForm);

      // Toast Success

      // router.push(`/organizer-dashboard`);
    } catch (err) {
      if (err instanceof AxiosError) {
        // replace log with toast
        console.log(err);
      }
    }
  };

  return { createEvent };
};

export default useCreateEvent;
