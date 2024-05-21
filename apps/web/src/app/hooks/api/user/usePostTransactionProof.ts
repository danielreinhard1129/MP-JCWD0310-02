'use client';

import { useAppSelector } from '@/app/redux/hook';
import { axiosInstance } from '@/lib/axios';
import { FileWithPath } from 'react-dropzone';

interface PostProofProps {
  eventId: number;
  uuid: string;
  image: File[];
}

const usePostTransactionProof = () => {
  const user = useAppSelector((state) => state.user);

  const postTransactionProof = async (
    eventId: number,
    uuid: string,
    image: File[],
  ) => {
    try {
      const createEventForm = new FormData();
      createEventForm.append('userId', String(user.userId));
      createEventForm.append('eventId', String(eventId));
      createEventForm.append('uuid', String(uuid));

      image.forEach((file: FileWithPath) => {
        createEventForm.append('thumbnail', file);
      });
      const { data } = await axiosInstance.post(
        '/user/event/transaction/proof',
        createEventForm,
        {
          data: createEventForm,
          headers: { 'Content-Type': 'multipart/form-data' },
        },
      );
    } catch (error) {}
  };
  return { postTransactionProof };
};

export default usePostTransactionProof;
