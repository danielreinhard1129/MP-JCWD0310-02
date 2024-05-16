import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  email: Yup.string().required('Please input your Email').email(),
  password: Yup.string().required('Please input your Password').min(6),
});

export default validationSchema;
