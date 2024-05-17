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
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import validationSchema from '../(auth)/login/validationSchema';
import useLogin from '../hooks/api/auth/useLogin';

const RegisterForm = () => {
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
        const idLoading = toast.loading('Submitting register form');
        login(values).finally(() => toast.done(idLoading));
      },
    });
  const handleExpandedRegisterForm = () => {
    if (errors.email && touched.email) {
      handleSubmit();
      toast.error('Please input your email');
    }
  };
  return (
    <>
      <Card className='w-[550px]'>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Login Account</CardTitle>
          <CardDescription className='text-center'>
            Enter your email below to login your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6"></div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>
          <div className="grid gap-2">
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
          </div>
          <div className="grid gap-2">
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
          </div>
        </CardContent>
        <CardFooter className="grid grid-cols-1 gap-3">
          <Button className="w-full">Login</Button>
          <Link href="/login/forgot-password" className="text-xs mx-auto text-center">
            Forgot your password?
          </Link>

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

          <Button onClick={() => router.push('/register')} className="w-full">
            Create Your Account
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default RegisterForm;
