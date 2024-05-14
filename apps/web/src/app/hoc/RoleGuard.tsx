'use client';

import { useAppSelector } from '@/app/redux/hook';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

export default function RoleGuard(Component: any) {
  return function IsAuthorized(props: any) {
    let token = localStorage.getItem('token');
    const user = useAppSelector((state: RootState) => state.user);
    const [data, setData] = useState(0);
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (!token) router.push('/');
      if (user.userId?.valueOf) {
        setData(user.userId);
        setLoading(false);
      }
    }, [user]);

    useEffect(() => {
      if (data && user.role !== 'organizer') {
        router.push('/');
      }
    }, [data]);

    if (loading) return <div>Loading</div>;
    if (!loading) return <Component {...props} />;
  };
}
