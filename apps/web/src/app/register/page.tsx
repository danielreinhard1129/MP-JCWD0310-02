'use client';
<<<<<<< HEAD

import Forminput from '@/components/Forminput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormik } from 'formik';
// import { validationSchema } from './validationSchema';
// import useRegister from '@/hooks/api/auth/useRegister';

const Register = () => {
//   const { register } = useRegister();
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
    },
    // validationSchema,
    onSubmit: (values) => {
    //   register(values);
    },
  });

  return (
    <main className="container mx-auto h-[90vh] px-4">
      <div className="mt-40 flex justify-center">
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
                  name="fullName"
                  type="text"
                  label="Full Name"
                  placeholder="Full Name"
                  value={formik.values.fullName}
                  error={formik.errors.fullName}
                  isError={
                    !!formik.touched.fullName && !!formik.errors.fullName
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
              </div>
              <Button className="mt-6 w-full">Register</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
=======
const Register = () => {
  const { register } = useRegister();

  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    onSubmit(values) {
      register(values);
    },
  });

  const Form: FormCard = {
    InputForm: [
      {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        inputLabel: 'Input your First Name',
      },
      {
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        inputLabel: 'Input your Last Name',
      },
      {
        name: 'email',
        label: 'Email',
        type: 'text',
        inputLabel: 'Input your Email',
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        inputLabel: 'Input your Password',
      },
    ],

    button: { buttonLabel: 'Register' },
    formik: formik,
  };

  return (
    <div className="w-full h-full justify-center p-10 bg-slate-500">
      <FormCard
        InputForm={Form.InputForm}
        button={Form.button}
        formik={Form.formik}
      />
    </div>
>>>>>>> testing
  );
};

export default Register;
<<<<<<< HEAD

=======
>>>>>>> testing
