'use client';

import Forminput from '@/components/Forminput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormik } from 'formik';
import validationSchema from "./validationSchema"
import useRegister from '@/app/hooks/api/auth/useRegister';

const Register = () => {
  const { register } = useRegister();
  const formik = useFormik({
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

  return (
    <main className="h-[90vh]">
      <div className="flex justify-center">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-primary">
              Welcome to TuneTix
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
                  isError={
                    !!formik.touched.lastName && !!formik.errors.lastName
                  }
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
                  isError={
                    !!formik.touched.password && !!formik.errors.password
                  }
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                />

                <Forminput
                  name="referralCode"
                  type="text"
                  label="Referral Code"
                  placeholder="Referral Code"
                  value={formik.values.referralCode}
                  error={formik.errors.referralCode}
                  isError={
                    !!formik.touched.referralCode && !!formik.errors.referralCode
                  }
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                />
              </div>
              <Button className="mt-6 w-full">Register</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Register;
