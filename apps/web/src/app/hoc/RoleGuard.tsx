'use client';

import { useAppSelector } from '@/app/redux/hook';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function RoleGuard(Component: any) {
  return function IsAuth(props: any) {
    const [isLoading, setIsLoading] = useState(true);
    const { role } = useAppSelector((state) => state.user);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, []);
    
    useEffect(() => {
      if (!role && !false) {
        redirect("/");
      }
    }, [role,isLoading]);

    if(isLoading|| !role) {
        return (
            <h1 className='container flex h-screen justify-center px-4 text-4xl pt-24 font-extrabold'>
                Loading...
            </h1>
        );
    };

    return <Component {...props}/>

  };
}
