'use client';

import Forminput from '@/components/Forminput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useFormik } from 'formik';
import validationSchema from './validationSchema';
import useRegisterOrganizer from '@/app/hooks/api/auth/useRegister-Organizer';
import { AuthenticationGuard } from '../../hoc/AuthGuard';
import RegisterOrganizerForm from '@/app/components/RegisterOrganizerForm';

const OrganizerRegister = () => {
  return (
    <RegisterOrganizerForm />
    // <main>
    //   <div>
    //     <Card className="w-[450px] mx-auto my-10">
    //       <CardHeader>
    //         <CardTitle className="text-center text-3xl text-primary">
    //           Welcome to TuneTix Organizer Registration
    //         </CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         <form onSubmit={formik.handleSubmit}>
    //           <div className="grid w-full items-center gap-4">
    //             <Forminput
    //               name="firstName"
    //               type="text"
    //               label="First Name"
    //               placeholder="First Name"
    //               value={formik.values.firstName}
    //               error={formik.errors.firstName}
    //               isError={
    //                 !!formik.touched.firstName && !!formik.errors.firstName
    //               }
    //               handleChange={formik.handleChange}
    //               handleBlur={formik.handleBlur}
    //             />

    //             <Forminput
    //               name="lastName"
    //               type="text"
    //               label="Last Name"
    //               placeholder="Last Name"
    //               value={formik.values.lastName}
    //               error={formik.errors.lastName}
    //               isError={
    //                 !!formik.touched.lastName && !!formik.errors.lastName
    //               }
    //               handleChange={formik.handleChange}
    //               handleBlur={formik.handleBlur}
    //             />

    //             <Forminput
    //               name="email"
    //               type="text"
    //               label="Email"
    //               placeholder="Email"
    //               value={formik.values.email}
    //               error={formik.errors.email}
    //               isError={!!formik.touched.email && !!formik.errors.email}
    //               handleChange={formik.handleChange}
    //               handleBlur={formik.handleBlur}
    //             />

    //             <Forminput
    //               name="password"
    //               type="password"
    //               label="Password"
    //               placeholder="Password"
    //               value={formik.values.password}
    //               error={formik.errors.password}
    //               isError={
    //                 !!formik.touched.password && !!formik.errors.password
    //               }
    //               handleChange={formik.handleChange}
    //               handleBlur={formik.handleBlur}
    //             />

    //             <Forminput
    //               name="referralCode"
    //               type="text"
    //               label="Referral Code"
    //               placeholder="Referral Code"
    //               value={formik.values.referralCode}
    //               error={formik.errors.referralCode}
    //               isError={
    //                 !!formik.touched.referralCode &&
    //                 !!formik.errors.referralCode
    //               }
    //               handleChange={formik.handleChange}
    //               handleBlur={formik.handleBlur}
    //             />
    //           </div>
    //           <Button className="mt-6 w-full">Register</Button>
    //         </form>
    //       </CardContent>
    //     </Card>
    //   </div>
    // </main>
  );
};

export default AuthenticationGuard(OrganizerRegister);
