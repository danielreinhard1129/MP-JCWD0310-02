'use client';

import Forminput from '@/components/Forminput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState } from 'react';
import RoleGuard from '../hoc/RoleGuard';
import { useFormik } from 'formik';
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from 'react-pro-sidebar';
import validationSchema from './validationSchema';
import { AuthorizationGuard } from '../hoc/AuthGuard';
import createEventOrganizer from '../hooks/api/organizer/createEventOrganizer';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const organizerDashboard = () => {
  const { createEvent } = createEventOrganizer();
  const [collapes, setCollapes] = useState(false);
  const [startDate, setStartDate] = useState(Date);
  const [endDate, setEndDate] = useState(Date);
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        userId: '',
        title: '',
        description: '',
        price: '',
        booked: '',
        limit: '',
        thumbnail: '',
        startDate: '',
        endDate: '',
        city: '',
        country: '',
        category: '',
        email: '',
      },
      validationSchema,
      onSubmit: (values) => {
        values.startDate = startDate;
        values.endDate = endDate;
        createEvent(values);
      },
    });
  return (
    <main className="flex items-center justify-center">
        <Card className="w-[450px]">
          <CardHeader>
            <CardTitle className="text-center text-3xl text-primary">
              Login
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <Forminput
                  name="userId"
                  type="text"
                  label="userId"
                  placeholder="userId"
                  value={values.userId}
                  error={errors.userId}
                  isError={!!touched.userId && !!errors.userId}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <Forminput
                  name="title"
                  type="text"
                  label="title"
                  placeholder="title"
                  value={values.title}
                  error={errors.title}
                  isError={!!touched.title && !!errors.title}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <Forminput
                  name="price"
                  type="text"
                  label="price"
                  placeholder="price"
                  value={values.price}
                  error={errors.price}
                  isError={!!touched.price && !!errors.price}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <Forminput
                  name="description"
                  type="text"
                  label="description"
                  placeholder="description"
                  value={values.description}
                  error={errors.description}
                  isError={!!touched.description && !!errors.description}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <Forminput
                  name="booked"
                  type="text"
                  label="booked"
                  placeholder="booked"
                  value={values.booked}
                  error={errors.booked}
                  isError={!!touched.booked && !!errors.booked}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <Forminput
                  name="limit"
                  type="text"
                  label="limit"
                  placeholder="limit"
                  value={values.limit}
                  error={errors.limit}
                  isError={!!touched.limit && !!errors.limit}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <Forminput
                  name="thumbnail"
                  type="text"
                  label="thumbnail"
                  placeholder="thumbnail"
                  value={values.thumbnail}
                  error={errors.thumbnail}
                  isError={!!touched.thumbnail && !!errors.thumbnail}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <DatePickerWithRange className="" startDate={setStartDate} endDate={setEndDate}/>
                <Forminput
                  name="city"
                  type="text"
                  label="city"
                  placeholder="city"
                  value={values.city}
                  error={errors.city}
                  isError={!!touched.city && !!errors.city}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <Forminput
                  name="country"
                  type="text"
                  label="country"
                  placeholder="country"
                  value={values.country}
                  error={errors.country}
                  isError={!!touched.country && !!errors.country}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
                <Forminput
                  name="category"
                  type="text"
                  label="category"
                  placeholder="category"
                  value={values.category}
                  error={errors.category}
                  isError={!!touched.category && !!errors.category}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

              </div>
              <Button type="submit" className="mt-6 w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
    </main>
  );
};

export default RoleGuard(organizerDashboard);
