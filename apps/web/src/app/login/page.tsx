'use client';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../redux/hook';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const store = useAppSelector((state) => state.user);

  return <></>;
};