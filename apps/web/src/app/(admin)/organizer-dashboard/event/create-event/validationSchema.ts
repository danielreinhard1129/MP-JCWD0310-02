import * as Yup from 'yup';
export const validationSchema = Yup.object().shape({
  title: Yup.string(),
  description: Yup.string(),
  thumbnail: Yup.array().min(1),
  startDate: Yup.date(),
  endDate: Yup.date(),
  price: Yup.string(),
  city: Yup.string(),
  country: Yup.string(),
  booked: Yup.number(),
  category: Yup.string(),
  limit: Yup.number(),
});

export default validationSchema;
