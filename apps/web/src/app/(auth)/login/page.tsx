'use client';

import Forminput from '@/components/Forminput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormik } from 'formik';
import validationSchema from './validationSchema';
import useLogin from '../../hooks/api/auth/useLogin';
import { AuthenticationGuard } from '../../hoc/AuthGuard';
import LoginForm from '@/app/components/LoginForm';

const Login = () => {
  // const { login } = useLogin();
  // const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
  //   useFormik({
  //     initialValues: {
  //       email: '',
  //       password: '',
  //     },
  //     validationSchema,
  //     onSubmit: (values) => {
  //       console.log(values);
        
  //       login(values);
  //     },
  //   });

  return (

    
    <>
      <LoginForm/>
    </>


    // <main className="flex items-center justify-center">
    //   <Card className="w-[450px]">
    //     <CardHeader>
    //       <CardTitle className="text-center text-3xl text-primary">
    //         Login
    //       </CardTitle>
    //     </CardHeader>
    //     <CardContent>
    //       <form onSubmit={handleSubmit}>
    //         <div className="grid w-full items-center gap-4">
    //           <Forminput
    //             name="email"
    //             type="text"
    //             label="Email"
    //             placeholder="Email"
    //             value={values.email}
    //             error={errors.email}
    //             isError={!!touched.email && !!errors.email}
    //             handleChange={handleChange}
    //             handleBlur={handleBlur}
    //           />

    //           <Forminput
    //             name="password"
    //             type="password"
    //             label="Password"
    //             placeholder="Password"
    //             value={values.password}
    //             error={errors.password}
    //             isError={!!touched.password && !!errors.password}
    //             handleChange={handleChange}
    //             handleBlur={handleBlur}
    //           />
    //         </div>
    //         <Button type="submit" className="mt-6 w-full">
    //           Login
    //         </Button>
    //       </form>
    //     </CardContent>
    //   </Card>
    // </main>
  );
};
export default AuthenticationGuard(Login);
