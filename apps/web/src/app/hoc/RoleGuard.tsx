'use client';

import { useAppSelector } from '@/app/redux/hook';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RoleGuard(Component: any) {
  return function IsAuthorized(props: any) {
    const router = useRouter();
    const user = useAppSelector((state) => state.user);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      let token = localStorage.getItem('token');
      setTimeout(() => {
        if (!token || user.role === 'client' || !user.userId) {
          router.push('/');
        }
        setLoading(false);
      }, 500);
    }, [user]);

    if (loading) return <div>Loading</div>;
    if (!loading) return <Component {...props} />;
  };
}
