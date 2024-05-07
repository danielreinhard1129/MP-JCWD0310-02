'use client';

import { FormCard } from '@/components/FormCard';
import { useFormik } from 'formik';
import { useLogin } from '../hooks/api/auth/useLogin';
import { useEffect, useState } from 'react';
import useKeepLogin from '../hooks/api/auth/useKeepLogin';
import { useRouter } from 'next/router';
import { useAppSelector } from '../redux/hook';

const Login = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useAppSelector((state) => state.user);
  const { login } = useLogin();
  const { keepLogin } = useKeepLogin();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit(values) {
      login(values);
    },
  });

  const Form: FormCard = {
    InputForm: [
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

    button: { buttonLabel: 'Login' },
    formik: formik,
  };

  useEffect(() => {
    if(!id) {
      if (localStorage.getItem('token')) {
        keepLogin();
      }
    }
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <h1>...Loading</h1>
        </div>
      ) : (
        <div className="w-full h-full justify-center p-10 bg-slate-500">
          <FormCard
            InputForm={Form.InputForm}
            button={Form.button}
            formik={Form.formik}
          />
        </div>
      )}
    </>
  );
};

export default Login;
