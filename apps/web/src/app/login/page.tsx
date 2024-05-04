'use client';

import { useAppSelector } from '@/redux/hooks';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const store = useAppSelector((state) => state.user);

  return <></>;
};
