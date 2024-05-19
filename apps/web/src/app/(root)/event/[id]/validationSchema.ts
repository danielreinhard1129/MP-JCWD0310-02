import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  review: Yup.string().required('Review is required'),
  rating: Yup.string().required('Rating is required'),
//   createdAt: Yup.date().min(1),

});