'use client';
import { axiosInstance } from '@/app/lib/axios';
import { useAppDispatch, useAppSelector } from '@/app/redux/hook';
import { loginAction } from '@/app/redux/slices/userSlice';
import { User } from '@/app/types/user.type';
import { useEffect, useState } from 'react';

interface KeepLoginResponseData extends User {
  id: number;
}
interface KeepLoginResponse {
  message: string;
  data: KeepLoginResponseData;
}

const useKeepLogin = () => {
  const dispatch = useAppDispatch();
  const keepLogin = async () => {
    try {
      const { data } =
        await axiosInstance.post<KeepLoginResponse>('/auth/keep-login');
      dispatch(loginAction(data.data));
    } catch (err) {
      console.log(err);
    }
  };

  return { keepLogin };
};

export default useKeepLogin;
