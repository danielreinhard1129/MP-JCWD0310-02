'use client';
import { AuthenticationGuard } from '../../hoc/AuthGuard';
import LoginForm from '@/app/components/LoginForm';

const Login = () => {
  return <LoginForm/>

};
export default AuthenticationGuard(Login);
