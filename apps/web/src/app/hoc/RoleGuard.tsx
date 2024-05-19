'use client';

import { useAppSelector } from '@/app/redux/hook';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';
import { Progress } from '@/components/ui/progress';

export default function RoleGuard(Component: any) {
  return function IsAuthorized(props: any) {
    let token = localStorage.getItem('token');
    const [progress, setProgress] = useState(0);
    const user = useAppSelector((state: RootState) => state.user);
    const [data, setData] = useState(0);
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        if (user.userId?.valueOf) {
          setData(user.userId);
        }
        setProgress(30);
      }, 250);
      setTimeout(() => {
        setProgress(66);
      }, 400);
      setTimeout(() => {
        setProgress(100);
      }, 700);
      setTimeout(() => {
        if (!token) router.push('/');
        setLoading(false);
      }, 800);
    }, [user]);

    useEffect(() => {
      if (data && user.role !== 'organizer') {
        router.push('/');
      }
    }, [data]);

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
}
