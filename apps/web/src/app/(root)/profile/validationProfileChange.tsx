import * as Yup from 'yup';
const validationProfileChange = Yup.object().shape({
  firstName: Yup.string().required('Please input your First Name'),
  lastName: Yup.string().required('Please input your Last Name'),
  thumbnail: Yup.array(),
  currentPassword: Yup.string().required('Please input your Password'),
  newPassword: Yup.string()
    .required('Please input your Password')
    .min(6, 'New Password must be at least 6 Characters'),
});

export default validationProfileChange;
