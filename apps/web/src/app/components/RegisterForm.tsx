import FormInput from '@/components/Forminput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import validationSchema from '../(auth)/register/validationSchema';
import useRegister from '../hooks/api/auth/useRegister';
import { toast } from 'react-toastify';
import Link from 'next/link';

const RegisterForm = () => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const { register } = useRegister();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        referralCode: '',
      },
      validationSchema,
      onSubmit: (values) => {
        const idLoading = toast.loading('Submitting register form');
        register(values).finally(() => toast.done(idLoading));
      },
    });
  const handleExpandedRegisterForm = () => {
    if (!errors.email && values.email.length > 2) {
      setExpanded(!expanded);
    } else {
      toast.error('Please input your email');
    }
  };
  return (
    <Card className='w-[550px]'>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
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
                  <FormInput
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    value={values.password}
                    error={errors.password}
                    isError={!!touched.password && !!errors.password}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />

                  <FormInput
                    name="firstName"
                    type="text"
                    label="First Name"
                    placeholder="First Name"
                    value={values.firstName}
                    error={errors.firstName}
                    isError={!!touched.firstName && !!errors.firstName}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                  <FormInput
                    name="lastName"
                    type="text"
                    label="Last Name"
                    placeholder="Last Name"
                    value={values.lastName}
                    error={'errors.lastName'}
                    isError={!!touched.lastName && !!errors.lastName}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />

                  <FormInput
                    name="referralCode"
                    type="text"
                    label="Referral Code"
                    placeholder="Refferral Code"
                    value={values.referralCode}
                    error={errors.referralCode}
                    isError={!!touched.referralCode && !!errors.referralCode}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />
                </>
              ) : (
                ''
              )}

              <div className="flex flex-col gap-4">
                {expanded ? (
                  <Button
                    onClick={() => {
                      if (errors.email) toast.error(errors.email);
                      if (errors.password) toast.error(errors.password);
                      if (errors.firstName) toast.error(errors.firstName);
                      if (errors.lastName) toast.error(errors.lastName);
                    }}
                    type="submit"
                    className="w-full"
                  >
                    Register
                  </Button>
                ) : (
                  ''
                )}
              </div>
            </div>
          </form>
          {expanded ? (
            ''
          ) : (
            <Button
              id="fakeRegisterButtonAKAexpandedButton"
              onClick={handleExpandedRegisterForm}
              className="w-full"
            >
              Register
            </Button>
          )}
          {/*  */}
          <div className="flex md:flex-row md:pt-0 pt-4 flex-col text-center justify-center items-center">
          <Link href="/login" className="text-center text-sm">Already have an account?</Link>
          </div>
          <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or
            </span>
          </div>
          </div>
        
            <Button
              onClick={() => router.push('/register-organizer')}
              className="w-full">
              Join us as organizer
            </Button>
          {/*  */}
        </CardContent>
    </Card>
  );
};

export default RegisterForm;
