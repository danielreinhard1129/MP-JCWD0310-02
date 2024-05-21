'use client';

import { useAppSelector } from '@/app/redux/hook';
import { Progress } from '@/components/ui/progress';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const getToken = () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) return
    return token;
  } catch (error) {
    return;
  }
};

export const AuthorizationGuard = (Component: any) => {
  return function IsAuthorized(props: any) {
    const router = useRouter();
    const [progress, setProgress] = useState(0);
    const user = useAppSelector((state) => state.user);
    const [loading, setLoading] = useState(true);
    const token = getToken();

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
        <div className="min-h-[calc(100vh-130px)] w-full flex justify-center items-center">
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
    let token = getToken();

    useEffect(() => {
      setTimeout(() => {
        setProgress(30);
      }, 250);
      setTimeout(() => {
        setProgress(66);
      }, 400);
      setLoading(false);
      setTimeout(() => {
        setProgress(100);
      }, 700);
      setTimeout(() => {
        if (token && user.userId) {
          router.push('/');
        }
        setLoading(false);
      }, 800);
    }, []);

    if (loading)
      return (
        <div className="min-h-[calc(100vh-130px)] w-full flex justify-center items-center">
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
    let token = getToken();

    useEffect(() => {
      if (token && token !== 'token') {
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
        <div className="min-h-[calc(100vh-130px)] w-full flex justify-center items-center">
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
    const token = getToken();

    useEffect(() => {
      setTimeout(() => {
        setProgress(30);
      }, 250);
      setTimeout(() => {
        setProgress(66);
        if (!token) {
          router.push('/');
        }
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
        <div className="min-h-[calc(100vh-130px)] w-full flex justify-center items-center">
          <Progress
            value={progress}
            className="w-[40%] transition-all duration-300"
          />
        </div>
      );
    if (!loading) {
      return <Component {...props} />;
    }
  };
};
