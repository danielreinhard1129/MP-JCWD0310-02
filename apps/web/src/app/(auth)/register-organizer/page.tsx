'use client';
import { AuthenticationGuard } from '../../hoc/AuthGuard';
import RegisterOrganizerForm from '@/app/components/RegisterOrganizerForm';

const OrganizerRegister = () => {
  return(
    <RegisterOrganizerForm />
  )
};

export default AuthenticationGuard(OrganizerRegister);
