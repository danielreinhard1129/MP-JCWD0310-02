import * as Yup from "yup";
const validationSchema = Yup.object().shape({
    firstName : Yup.string().required("please input your firstName"),
    lastName : Yup.string().required("please input your lastName"),
    email : Yup.string().required("please input your email").email(),
    password : Yup.string().required("please input your password").min(6),
});

export default validationSchema;