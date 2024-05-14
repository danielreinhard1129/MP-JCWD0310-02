import FormInput from '@/components/Forminput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormik } from 'formik';
import React from 'react';
import validationSchema from '../(auth)/login/validationSchema';
import useLogin from '../hooks/api/auth/useLogin';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();
  const { login } = useLogin();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema,
      onSubmit: (values) => {
        console.log(values);

        login(values);
      },
    });
  return (
    <Card className="w-full bg-indigo-950 rounded-3xl">
      <CardHeader>
        <CardTitle className="text-center text-3xl text-[#ffff00]">
          Login your Account
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-10">
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
            <div className="flex flex-col gap-4">
              <Button
                type="submit"
                className="w-full bg-transparent duration-300 transition-all hover:bg-[#ffff00] hover:text-indigo-950 text-xl h-14 text-[#ffff00] border-2 rounded-2xl border-[#ffff00]"
              >
                Login
              </Button>
            </div>
          </div>
        </form>

        <div className="flex md:flex-row flex-col justify-between gap-4">
          <Button
            onClick={() => router.push('/forget-password')}
            className="w-full bg-transparent duration-300 font-normal transition-all hover:bg-[#ffff00] hover:text-indigo-950 text-base h-10 text-[#ffff00] border-2 rounded-2xl border-[#ffff00]"
          >
            Forget Password ?
          </Button>
          <Button
            onClick={() => router.push('/register')}
            className="w-full bg-transparent duration-300 font-normal text-base transition-all hover:bg-[#ffff00] hover:text-indigo-950 h-10 text-[#ffff00] border-2 rounded-2xl border-[#ffff00]"
          >
            Register
          </Button>
        </div>

      </CardContent>
    </Card>
  );
};

export default LoginForm;
