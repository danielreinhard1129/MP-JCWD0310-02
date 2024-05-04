'use client';

import { FormCard } from '@/components/FormCard';
import { useFormik } from 'formik';
import { useLogin } from '../hooks/api/auth/useLogin';

const Login = () => {

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        onSubmit(values) {
          useLogin(values);
        },
      });
    
      const Form : FormCard = {
        
        InputForm : [
          { name:"email", label : "Email" , type : "text" , inputLabel : "Input your Email" },
          { name:"password", label : "Password" , type : "password" , inputLabel : "Input your Password" }
        ],
    
        button : {buttonLabel : "Login"},
        formik : formik,
      }
    
      return (
        <div className='w-full h-full justify-center p-10 bg-slate-500'>
          <FormCard  InputForm={Form.InputForm} button={Form.button} formik={Form.formik}/>
        </div>
      );
    };

export default Login