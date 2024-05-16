import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('Please input your First Name'),
  lastName: Yup.string().required('Please input your Last Name'),
  email: Yup.string().required('Please input your Email').email(),
  password: Yup.string().required('Please input your Password').min(6),
});

export default validationSchema;
