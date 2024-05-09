import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  userId: Yup.number(),
  title: Yup.string(),
  price: Yup.number(),
  description: Yup.string(),
  booked: Yup.number(),
  limit: Yup.number(),
  thumbnail: Yup.string(),
  startDate: Yup.date(),
  endDate: Yup.date(),
  city: Yup.string(),
  country: Yup.string(),
  category: Yup.string(),
  email: Yup.string(),
});

export default validationSchema;
