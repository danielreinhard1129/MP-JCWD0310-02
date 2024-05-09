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
  const [ collapes,setCollapes ] = useState(false);
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
    <>
      <div id="sideBar" className='flex h-[100vh]'>
        <Sidebar collapsed={collapes} className='h-[100vh]'>
          <Menu  className='bg-indigo-950 h-full'>
            <MenuItem
              icon={<MenuOutlinedIcon />}
              onClick={()=>{
                setCollapes(!collapes);
              }}
              className='text-center text-[#f9fb01]'
            >
              {' '}
              <h2>Admin</h2>
            </MenuItem>

            <MenuItem className='text-[#f9fb01] hover:text-red-500' icon={<HomeOutlinedIcon />}>Home</MenuItem>
            <MenuItem className='text-[#f9fb01]' icon={<PeopleOutlinedIcon />}>Team</MenuItem>
            <MenuItem className='text-[#f9fb01]' icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
            <MenuItem className='text-[#f9fb01]' icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
            <MenuItem className='text-[#f9fb01]' icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
            <MenuItem className='text-[#f9fb01]' icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
          </Menu>
        </Sidebar>
        <main>
          <h1 style={{ color: 'white', marginLeft: '5rem' }}>
            React-Pro-Sidebar
          </h1>
        </main>
      </div>
    </>
  );
};

export default RoleGuard(organizerDashboard);
