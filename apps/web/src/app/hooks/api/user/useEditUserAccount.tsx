'use client';

import { useAppSelector } from '@/app/redux/hook';
import { axiosInstance } from '@/lib/axios';
import { FileWithPath } from 'react-dropzone';

interface EditAccountUserProps {
  currentPassword: string;
  newPassword: string;
  firstName: string;
  lastName: string;
  thumbnail: File[];
}

const useEditUserAccount = () => {
  const user = useAppSelector((state) => state.user);

  const EditUserAccount = async (body: EditAccountUserProps) => {
    try {
      const { currentPassword, newPassword, firstName, lastName, thumbnail } =
        body;
      const userId = user.userId;
      const email = user.email;

      const createEventForm = new FormData();
      createEventForm.append('userId', String(userId));
      createEventForm.append('firstName', firstName);
      createEventForm.append('lastName', lastName);
      createEventForm.append('email', email);
      createEventForm.append('currentPassword', currentPassword);
      createEventForm.append('newPassword', newPassword);

      thumbnail.forEach((file: FileWithPath) => {
        createEventForm.append('thumbnail', file);
      });
      const { data } = await axiosInstance.post('/user/edit', createEventForm, {
        data: createEventForm,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (error) {}
  };
  return { EditUserAccount };
};

export default useEditUserAccount;
