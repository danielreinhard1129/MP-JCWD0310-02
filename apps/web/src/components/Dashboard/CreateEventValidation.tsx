import * as Yup from 'yup';
export const CreateEventValidation = Yup.object().shape({
  title: Yup.string().required('Title event is required!'),
  description: Yup.string().required('Description event is required!'),
  price: Yup.number(),
  booked: Yup.number(),
  limit: Yup.number()
    .required('Limit event ticket sold is required')
    .min(1, 'Limit of event ticket at least 1 or more'),
  startDate: Yup.date().required('Event start date is required'),
  endDate: Yup.date().required('Event end date is required'),
  address: Yup.string().required('Address of the event is required'),
  city: Yup.string().required('Address of the event is required'),
  province: Yup.string().required('Address of the event is required'),
  country: Yup.string().required('Address of the event is required'),
  time: Yup.string().required('Time event is required!'),
  category: Yup.string().required('Category of event is required'),
  thumbnail: Yup.array().required().min(1).max(1),
});

export default CreateEventValidation;
