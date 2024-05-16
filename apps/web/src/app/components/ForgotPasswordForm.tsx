import FormInput from '@/components/Forminput';
import { Button } from '@/components/ui/button';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import validationSchema from '../(auth)/login/forgot-password/validationSchema';
import { toast } from 'react-toastify';
import { InputOtpCode } from './InputOtpCode';
import useForgotPassword from '../hooks/api/auth/useForgotPassword';

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
    <>
      <div className="rounded-lg border bg-indigo-950 w-full bg-card text-card-foreground shadow-sm">
        <CardHeader>
          <CardTitle className="text-center text-3xl text-[#ffff00]">
            Forgot Password
          </CardTitle>
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
                    <p className="text-[#ffff00] font-semibold">
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
                  className="w-full bg-transparent duration-300 transition-all hover:bg-[#ffff00] hover:text-indigo-950 text-xl h-14 text-[#ffff00] border-2 rounded-2xl border-[#ffff00]"
                >
                  {expanded ? 'Send Reset Password' : 'Get Code'}
                </Button>
              </div>
            </div>
          </form>
          <div className="flex md:flex-row md:pt-0 pt-4 flex-col text-center justify-center items-center text-[#ffff00] gap-2">
            <p className="w-full text-sm">Are you have an account?</p>
            <Button
              onClick={() => router.push('/login')}
              className="w-full bg-transparent duration-300 font-normal text-base transition-all hover:bg-[#ffff00] hover:text-indigo-950 h-10 text-[#ffff00] border-b-2 border-[#ffff00]"
            >
              Login
            </Button>
          </div>
          {/*  */}
        </CardContent>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
