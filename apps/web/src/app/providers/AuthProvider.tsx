'use client';

import useKeepLogin from '@/app/hooks/api/auth/useKeepLogin';
import { PropsWithChildren, useEffect } from 'react';

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { keepLogin } = useKeepLogin();
  useEffect(() => {
    keepLogin();
  }, []);

  return <>{children}</>;
};
