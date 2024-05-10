'use client';

import Forminput from '@/components/Forminput';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React, { useState } from 'react';
import RoleGuard from '../hoc/RoleGuard';
import { useFormik } from 'formik';
import validationSchema from './validationSchema';
import { AuthorizationGuard } from '../hoc/AuthGuard';
import createEventOrganizer from '../hooks/api/organizer/createEventOrganizer';
import CreateEventForm from '../components/CreateEventForm';

const organizerDashboard = () => {
  const { createEvent } = createEventOrganizer();
  const [collapes, setCollapes] = useState(false);

  return (
    <main className="flex items-center justify-center">    
      <CreateEventForm/>
    </main>
  );
};

export default RoleGuard(organizerDashboard);
