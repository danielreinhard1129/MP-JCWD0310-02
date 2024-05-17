import FormInput from '@/components/Forminput';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import validationSchema from '../(auth)/login/forgot-password/validationSchema';
import { toast } from 'react-toastify';
import { InputOtpCode } from './InputOtpCode';
import useForgotPassword from '../hooks/api/auth/useForgotPassword';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const ForgotPasswordForm = () => {
  const router = useRouter();
  const { forgotPassword } = useForgotPassword();
  const [expanded, setExpanded] = useState(false);
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      email: '',
      resetCode: '',
      newPassword: '',
      retypePassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      const idLoading = toast.loading('Submitting register form');
      forgotPassword(values).finally(() => toast.done(idLoading));
    },
  });
  return (
    <Card className='w-[550px]'>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">Reset Password</CardTitle>
        <CardDescription className='text-center'>
          Enter your email below to reset your password
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 transition-all duration-300">
          <form onSubmit={handleSubmit} className="transition-all duration-300">
            <div className="grid w-full items-center gap-10 transition-all duration-300">
              <FormInput
                name="email"
                type="text"
                label="Email"
                placeholder="Email"
                value={values.email}
                error={errors.email}
                isError={!!touched.email && !!errors.email}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />

              {expanded ? (
                <>
                  <div className="flex justify-between gap-4 items-center">
                    <p className="font-semibold">
                      Input your reset code
                    </p>
                    <InputOtpCode
                      handleChange={(e) => setFieldValue('resetCode', e)}
                      value={values.resetCode}
                    />
                  </div>
                  <div>
                    <FormInput
                      name="newPassword"
                      type="password"
                      label="New Password"
                      placeholder="New Password"
                      value={values.newPassword}
                      error={errors.newPassword}
                      isError={!!touched.newPassword && !!errors.newPassword}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    />
                  </div>
                  <div>
                    <FormInput
                      name="retypePassword"
                      type="password"
                      label="Re-type New Password"
                      placeholder="Re-type New Password"
                      value={values.retypePassword}
                      error={errors.retypePassword}
                      isError={
                        !!touched.retypePassword && !!errors.retypePassword
                      }
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                    />
                  </div>
                </>
              ) : (
                ''
              )}

              <div className="flex flex-col gap-4">
                <Button
                  onClick={() => {
                    if (errors.email) toast.error(errors.email);
                    if (!errors.email && values.email.length > 2)
                      setExpanded(true);
                  }}
                  type="submit"
                  className="w-full"
                >
                  {expanded ? 'Send Reset Password' : 'Get Code'}
                </Button>
              </div>
            </div>
          </form>
          <div className="mx-auto">
            <Link href="/login" className="text-sm mx-auto">Already have an account?</Link>
          </div>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  );
};

export default ForgotPasswordForm;
