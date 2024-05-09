import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  email: Yup.string().required('please input your email'),
  password: Yup.string().required('please input your password').min(6),
});

export default validationSchema;
