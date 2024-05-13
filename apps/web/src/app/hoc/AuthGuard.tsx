'use client';

import { useAppSelector } from '@/app/redux/hook';
import { redirect, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useKeepLogin from '../hooks/api/auth/useKeepLogin';

export const AuthorizationGuard = (Component: any) => {
  return function IsAuthorized(props: any) {
    const router = useRouter();
    const user = useAppSelector((state) => state.user);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      let token = localStorage.getItem('token');
      setTimeout(() => {
        if (!token) {
          router.push('/');
        }
        setLoading(false);
      }, 500);
    }, [user]);

    if (loading) return <div>Loading</div>;
    if (!loading) return <Component {...props} />;
  };
};

export const AuthenticationGuard = (Component: any) => {
  return function IsAuthenticated(props: any) {
    const router = useRouter();
    const user = useAppSelector((state) => state.user);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      let token = localStorage.getItem('token');
      setTimeout(() => {
        if (token) {
          router.push('/');
          setLoading(false);
        }
      }, 500);
    }, [user]);

    if (loading) return <div>Loading</div>;
    if (!loading) return <Component {...props} />;
  };
};
