'use client';

import { AuthenticationGuard } from '@/app/hoc/AuthGuard';
import RegisterForm from '@/app/components/RegisterForm';
const Register = () => {
  return (
    <>
      <RegisterForm />
    </>
  );
};

export default AuthenticationGuard(Register);
