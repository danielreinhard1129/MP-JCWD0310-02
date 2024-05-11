// 'use client';

// import Forminput from '@/components/Forminput';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import React, { useState } from 'react';
// import RoleGuard from '../hoc/RoleGuard';
// import { useFormik } from 'formik';
// import validationSchema from './validationSchema';
// import { AuthorizationGuard } from '../hoc/AuthGuard';
// import createEventOrganizer from '../hooks/api/organizer/createEventOrganizer';
// import { DatePickerWithRange } from '../components/DateRange';
// import Dropzone from '@/components/Dropzone';
// import { useAppSelector } from '../redux/hook';
// import { IFormCreateEvent } from '../types/event.type';
// import PreviewImages from '@/components/PreviewImages';

// const organizerDashboard = () => {
//   const { createEvent } = createEventOrganizer();
//   const { id } = useAppSelector((state) => state.user);
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   const {
//     values,
//     errors,
//     touched,
//     setFieldValue,
//     handleChange,
//     handleBlur,
//     handleSubmit,
//   } = useFormik<IFormCreateEvent>({
//     initialValues: {
//       title: '',
//       description: '',
//       price: 0,
//       booked: 0,
//       limit: 0,
//       thumbnail: [],
//       startDate: '',
//       endDate: '',
//       city: '',
//       country: '',
//       category: '',
//       email: '',
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       values.startDate = startDate;
//       values.endDate = endDate;
//       createEvent({ ...values, userId: id });
//     },
//   });

//   const handleDateChange = (start, end) => {
//     setStartDate(start);
//     setEndDate(end);
//   return (
//     <main>
//       <div>
//         <Card className="w-[600px] mx-auto my-10">
//           <CardHeader>
//             <CardTitle className="text-center text-3xl text-primary">
//               Create Event
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit}>
//               <div className="grid w-full items-center gap-4">
//                 <Forminput
//                   name="title"
//                   type="text"
//                   label="title"
//                   placeholder="title"
//                   value={values.title}
//                   error={errors.title}
//                   isError={!!touched.title && !!errors.title}
//                   handleChange={handleChange}
//                   handleBlur={handleBlur}
//                 />
//                 <Forminput
//                   name="price"
//                   type="number"
//                   label="price"
//                   placeholder="price"
//                   value={values.price}
//                   error={errors.price}
//                   isError={!!touched.price && !!errors.price}
//                   handleChange={handleChange}
//                   handleBlur={handleBlur}
//                 />
//                 <Forminput
//                   name="description"
//                   type="text"
//                   label="description"
//                   placeholder="description"
//                   value={values.description}
//                   error={errors.description}
//                   isError={!!touched.description && !!errors.description}
//                   handleChange={handleChange}
//                   handleBlur={handleBlur}
//                 />
//                 <Forminput
//                   name="booked"
//                   type="number"
//                   label="booked"
//                   placeholder="booked"
//                   value={values.booked}
//                   error={errors.booked}
//                   isError={!!touched.booked && !!errors.booked}
//                   handleChange={handleChange}
//                   handleBlur={handleBlur}
//                 />
//                 <Forminput
//                   name="limit"
//                   type="number"
//                   label="limit"
//                   placeholder="limit"
//                   value={values.limit}
//                   error={errors.limit}
//                   isError={!!touched.limit && !!errors.limit}
//                   handleChange={handleChange}
//                   handleBlur={handleBlur}
//                 />
//                 <PreviewImages
//                   fileImages={values.thumbnail}
//                   onRemoveImage={(idx: number) =>
//                     setFieldValue(
//                       'thumbnail',
//                       values.thumbnail?.toSpliced(idx, 1),
//                     )
//                   }
//                 />
//                 <Dropzone
//                   isError={Boolean(errors.thumbnail)}
//                   label="Thumbnail"
//                   onDrop={(files) =>
//                     setFieldValue('thumbnail', [
//                       ...values.thumbnail,
//                       ...files.map((file) => file),
//                     ])
//                   }
//                 />
//                 <DatePickerWithRange
//                   className=""
//                   startDate={setStartDate}
//                   endDate={setEndDate}
//                 />
//                 <Forminput
//                   name="city"
//                   type="text"
//                   label="city"
//                   placeholder="city"
//                   value={values.city}
//                   error={errors.city}
//                   isError={!!touched.city && !!errors.city}
//                   handleChange={handleChange}
//                   handleBlur={handleBlur}
//                 />
//                 <Forminput
//                   name="country"
//                   type="text"
//                   label="country"
//                   placeholder="country"
//                   value={values.country}
//                   error={errors.country}
//                   isError={!!touched.country && !!errors.country}
//                   handleChange={handleChange}
//                   handleBlur={handleBlur}
//                 />
//                 <Forminput
//                   name="category"
//                   type="text"
//                   label="category"
//                   placeholder="category"
//                   value={values.category}
//                   error={errors.category}
//                   isError={!!touched.category && !!errors.category}
//                   handleChange={handleChange}
//                   handleBlur={handleBlur}
//                 />
//               </div>
//               <Button type="submit" className="mt-6 w-full">
//                 Create Event
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </main>
//   );
// };

// export default RoleGuard(organizerDashboard);
