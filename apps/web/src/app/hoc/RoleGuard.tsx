'use client';

import { useAppSelector } from '@/app/redux/hook';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RoleGuard(Component: any) {
  return function IsAuthorized(props: any) {
    const router = useRouter()
    const { role } = useAppSelector((state) => state.user);

    useEffect(() => {
      if (Boolean(!role)) {
        router.push('/')
      }
    }, []);
    return <Component {...props}/>

  };
}
