'use client';

import { useAppSelector } from '@/app/redux/hook';
import { redirect, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import useKeepLogin from '../hooks/api/auth/useKeepLogin';

export const AuthorizationGuard = (Component: any) => {
  return function IsAuthorized(props: any) {
    const router = useRouter();
    const user = useAppSelector((state) => state.user);

    useEffect(() => {
      if (new Boolean(user.id)) {
        // router.push('/');
      }
    }, []);
    return <Component {...props} />;
  };
};

export const AuthenticationGuard = (Component: any) => {
  return function IsAuthenticated(props: any) {
    const router = useRouter();
    const user = useAppSelector((state) => state.user);

    useEffect(() => {
      if (new Boolean(user.id)) {
        // router.push('/');
      }
    }, []);
    return <Component {...props} />;
  };
};
