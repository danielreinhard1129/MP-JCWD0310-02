'use client';

import { useAppSelector } from '@/app/redux/hook';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthGuard(Component: any) {
  return function IsAuthenticated(props: any) {
    const router = useRouter()
    const { id } = useAppSelector((state) => state.user);
    
    useEffect(() => {
      if (Boolean(!id)) {
        router.push('/')
      }
    }, []);
    return <Component {...props}/>

  };
}
