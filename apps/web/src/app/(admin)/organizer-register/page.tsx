'use client';

import Forminput from '@/components/Forminput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormik } from 'formik';
import Link from 'next/link';
// import { validationSchema } from './validationSchema';
// import useRegister from '@/hooks/api/auth/useRegister';

const Register = () => {
  //   const { register } = useRegister();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    // validationSchema,
    onSubmit: (values) => {
      //   register(values);
    },
  });

  return (
    <main className="flex items-center justify-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-center text-3xl text-primary">
            Register as Organizer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <Forminput
                name="firstName"
                type="text"
                label="First Name"
                placeholder="First Name"
                value={formik.values.firstName}
                error={formik.errors.firstName}
                isError={
                  !!formik.touched.firstName && !!formik.errors.firstName
                }
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              <Forminput
                name="lastName"
                type="text"
                label="Last Name"
                placeholder="Last Name"
                value={formik.values.lastName}
                error={formik.errors.lastName}
                isError={!!formik.touched.lastName && !!formik.errors.lastName}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              <Forminput
                name="email"
                type="text"
                label="Email"
                placeholder="Email"
                value={formik.values.email}
                error={formik.errors.email}
                isError={!!formik.touched.email && !!formik.errors.email}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />

              <Forminput
                name="password"
                type="password"
                label="Password"
                placeholder="Password"
                value={formik.values.password}
                error={formik.errors.password}
                isError={!!formik.touched.password && !!formik.errors.password}
                handleChange={formik.handleChange}
                handleBlur={formik.handleBlur}
              />
            </div>
            <Button className="mt-6 w-full">Register</Button>
            <p className="text-xs text-center my-4">
              Already have an account?{' '}
              <Link className="text-blue-600" href="/organizer-login">
                Login here!
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default Register;
