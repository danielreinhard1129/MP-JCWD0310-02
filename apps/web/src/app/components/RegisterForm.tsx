import FormInput from '@/components/Forminput';
import { Button } from '@/components/ui/button';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import validationSchema from '../(auth)/register/validationSchema';
import useRegister from '../hooks/api/auth/useRegister';

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
        register(values);
      },
    });
  const handleExpandedRegisterForm = () => {
    if (!errors.email && values.email.length > 2) {
      setExpanded(!expanded);
    } else {
      // Logic Toastify
      alert(errors.email ? errors.email : "please input your email" );
    }
  };
  return (
    <div className='rounded-lg border bg-indigo-950 w-full bg-card text-card-foreground shadow-sm'>
      <CardHeader>
        <CardTitle className="text-center text-3xl text-[#ffff00]">
          Register Account
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
                  error={errors.lastName}
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
                  type="submit"
                  className="w-full bg-transparent duration-300 transition-all hover:bg-[#ffff00] hover:text-indigo-950 text-xl h-14 text-[#ffff00] border-2 rounded-2xl border-[#ffff00]"
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
            className="w-full bg-transparent duration-300 transition-all hover:bg-[#ffff00] hover:text-indigo-950 text-xl h-14 text-[#ffff00] border-2 rounded-2xl border-[#ffff00]"
          >
            Register
          </Button>
        )}
        {/*  */}
        <div className="flex md:flex-row md:pt-0 pt-4 flex-col text-center justify-center items-center text-[#ffff00] gap-2">
          <p className="w-full text-sm">Are you have an account?</p>
          <Button
            onClick={() => router.push('/login')}
            className="w-full bg-transparent duration-300 font-normal text-base transition-all hover:bg-[#ffff00] hover:text-indigo-950 h-10 text-[#ffff00] border-b-2 border-[#ffff00]"
          >
            Login
          </Button>
        </div>
        <div className="text-[#ffff00] flex md:flex-row flex-col text-center gap-2 justify-center items-center">
          <p className="w-full text-sm">
            Are you interested to join as organzier?
          </p>
          <Button
            onClick={() => router.push('/register-organizer')}
            className="w-full bg-transparent duration-300 font-normal text-base transition-all hover:bg-[#ffff00] hover:text-indigo-950 h-10 text-[#ffff00] border-b-2 border-[#ffff00]"
          >
            Join us as organizer
          </Button>
        </div>
        {/*  */}
      </CardContent>
    </div>
  );
};

export default RegisterForm;
