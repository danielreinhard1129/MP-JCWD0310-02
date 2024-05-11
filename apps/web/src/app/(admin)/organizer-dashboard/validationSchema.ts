import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
  title: Yup.string(),
  price: Yup.number(),
  description: Yup.string(),
  booked: Yup.number(),
  limit: Yup.number(),
  thumbnail: Yup.array().min(1),
  startDate: Yup.date(),
  endDate: Yup.date(),
  city: Yup.string(),
  country: Yup.string(),
  category: Yup.string(),
  email: Yup.string(),
});

export default validationSchema;
