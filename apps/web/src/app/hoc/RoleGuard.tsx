'use client';

import { useAppSelector } from '@/app/redux/hook';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RoleGuard(Component: any) {
  return function IsAuthorized(props: any) {
    const router = useRouter();
    const user = useAppSelector((state) => state.user);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      let token = localStorage.getItem('token');
      setLoading(true);
        // if (!user.role) {
        //   router.push('/');
        // }
        // if (!user.userId) {
        //   router.push('/');
        // }
        if (!token) {
          router.push('/');
        }

      setLoading(false);
    }, []);

    if (loading) return <div>Loading....</div>;
    else return <Component {...props} />;
  };
}
