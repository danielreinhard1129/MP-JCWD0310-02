'use client';

import { FormCard } from '@/components/FormCard';
import { useFormik } from 'formik';
import { useRegister } from '../hooks/api/auth/useRegister';

const Register = () => {

  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    onSubmit(values) {
      useRegister(values);
    },
  });

  const Form : FormCard = {
    
    InputForm : [
      { name:"userName", label : "UserName" , type : "text" , inputLabel : "Input your Username" },
      { name:"email", label : "Email" , type : "text" , inputLabel : "Input your Email" },
      { name:"password", label : "Password" , type : "password" , inputLabel : "Input your Password" }
    ],

    button : {buttonLabel : "Register"},
    formik : formik,
  }

  return (
    <div className='w-full h-full justify-center p-10 bg-slate-500'>
      <FormCard  InputForm={Form.InputForm} button={Form.button} formik={Form.formik}/>
    </div>
  );
};

export default Register;
