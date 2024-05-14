'use client';

import { useAppSelector } from '@/app/redux/hook';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
export const AuthorizationGuard = (Component: any) => {
  return function IsAuthorized(props: any) {
    const router = useRouter();
    const user = useAppSelector((state) => state.user);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      let token = localStorage.getItem('token');
      setTimeout(() => {
        if (!token && !user.userId) {
          router.push('/');
        }
        setLoading(false);
      }, 500);
    }, [user]);

    if (loading) return <div>Loading</div>;
    if (!loading) return <Component {...props} />;
  };
};

export const NeedAuthorizationGuard = (Component: any) => {
  return function IsAuthorized(props: any) {
    const router = useRouter();
    const user = useAppSelector((state) => state.user);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      let token = localStorage.getItem('token');
      setTimeout(() => {
        if (token && user.userId) {
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
        }
        setLoading(false);
      }, 500);
    }, [user]);

    if (loading) return <div>Loading</div>;
    if (!loading) return <Component {...props} />;
  };
};
export const NeedAuthenticationGuard = (Component: any) => {
  return function IsAuthenticated(props: any) {
    const router = useRouter();
    const user = useAppSelector((state) => state.user);
    const [loading, setLoading] = useState(true);
    let token = localStorage.getItem('token');

    useEffect(() => {
      setTimeout(() => {
        if (!token) {
          router.push('/');
        }
        setLoading(false);
      }, 700);
    }, [user]);

    if (loading)
      return (
        <div className="w-full flex flex-col justify-center border-t border-b border-[#ffff00] items-center h-[80vh] bg-indigo-950">
          <div className=''>
              <h1 className='text-3xl font-extrabold text-[#ffff00]'>Loading...</h1>
          </div>
        </div>
      );
    if (!loading) return <Component {...props} />;
  };
};
