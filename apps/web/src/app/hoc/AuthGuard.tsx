'use client';

import { useAppSelector } from '@/app/redux/hook';
import { Progress } from '@/components/ui/progress';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
export const AuthorizationGuard = (Component: any) => {
  return function IsAuthorized(props: any) {
    const router = useRouter();
    const [progress, setProgress] = useState(0);
    const user = useAppSelector((state) => state.user);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      let token = localStorage.getItem('token');
      setTimeout(() => {
        setProgress(30);
      }, 250);
      if (!token && !user.userId) {
        router.push('/');
      }
      setTimeout(() => {
        setProgress(66);
      }, 400);
      setTimeout(() => {
        setProgress(100);
      }, 700);
      setTimeout(() => {
        setLoading(false);
      }, 800);
    }, [user]);

    if (loading)
      return (
        <div className="min-h-[calc(100vh-128px)] w-full flex justify-center items-center">
          <Progress
            value={progress}
            className="w-[40%] transition-all duration-300"
          />
        </div>
      );
    if (!loading) return <Component {...props} />;
  };
};

export const NeedAuthorizationGuard = (Component: any) => {
  return function IsAuthorized(props: any) {
    const [progress, setProgress] = useState(0);
    const router = useRouter();
    const user = useAppSelector((state) => state.user);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      let token = localStorage.getItem('token');
      setTimeout(() => {
        setProgress(30);
      }, 250);
      setTimeout(() => {
        setProgress(66);
      }, 400);
      if (token && user.userId) {
        router.push('/');
      }
      setLoading(false);
      setTimeout(() => {
        setProgress(100);
      }, 700);
      setTimeout(() => {
        setLoading(false);
      }, 800);
    }, [user]);

    if (loading)
      return (
        <div className="min-h-[calc(100vh-128px)] w-full flex justify-center items-center">
          <Progress
            value={progress}
            className="w-[40%] transition-all duration-300"
          />
        </div>
      );
    if (!loading) return <Component {...props} />;
  };
};

export const AuthenticationGuard = (Component: any) => {
  return function IsAuthenticated(props: any) {
    const router = useRouter();
    const [progress, setProgress] = useState(0);
    const user = useAppSelector((state) => state.user);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      let token = localStorage.getItem('token');
      if (token) {
        router.push('/');
      }
      setTimeout(() => {
        setProgress(30);
      }, 250);
      setTimeout(() => {
        setProgress(66);
      }, 400);
      setTimeout(() => {
        setProgress(100);
      }, 700);
      setTimeout(() => {
        setLoading(false);
      }, 800);
    }, [user]);

    if (loading)
      return (
        <div className="min-h-[calc(100vh-128px)] w-full flex justify-center items-center">
          <Progress
            value={progress}
            className="w-[40%] transition-all duration-300"
          />
        </div>
      );
    if (!loading) return <Component {...props} />;
  };
};
export const NeedAuthenticationGuard = (Component: any) => {
  return function IsAuthenticated(props: any) {
    const router = useRouter();
    const [progress, setProgress] = useState(0);
    const user = useAppSelector((state) => state.user);
    const [loading, setLoading] = useState(true);
    let token = localStorage.getItem('token');

    useEffect(() => {
      setTimeout(() => {
        setProgress(30);
      }, 250);
      if (!token && !user.userId) {
        router.push('/');
      }
      setTimeout(() => {
        setProgress(66);
      }, 400);
      setTimeout(() => {
        setProgress(100);
      }, 700);
      setTimeout(() => {
        setLoading(false);
      }, 800);
    }, [user]);

    if (loading)
      return (
        <div className="min-h-[calc(100vh-128px)] w-full flex justify-center items-center">
          <Progress
            value={progress}
            className="w-[40%] transition-all duration-300"
          />
        </div>
      );
    if (!loading) return <Component {...props} />;
  };
};
