import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  email: Yup.string().required('Please input your Email').email(),
  resetCode: Yup.string()
    .required('Please input your Reset Password Code')
    .min(6, 'Otp code must be atleast 6 digit'),
  newPassword: Yup.string()
    .required('Please input your New Password')
    .min(6, 'New password must be atleast 6 digit'),
  retypePassword: Yup.string().oneOf(
    [Yup.ref('newPassword')],
    'Password re-type must be same',
  ),
});

export default validationSchema;
