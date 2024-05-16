'use client';
import FormInput from '@/components/Forminput';
import validationSchema from './validationSchema';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/app/redux/hook';
import Dropzone from '@/components/Dropzone';
import PreviewImages from '@/components/PreviewImages';
import FormTextArea from '@/components/FormTextArea';
import { DatePicker } from '@/components/DatePicker';
import useCreateEvent from '@/app/hooks/api/event/createEvent';
import FormInputCurrency from '@/components/FormInputCurrency';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

const CreateEventPage = () => {
  const { userId } = useAppSelector((state) => state.user);
  const { createEvent } = useCreateEvent();

  const {
    handleSubmit,
    values,
    errors,
    handleBlur,
    handleChange,
    touched,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: '',
      description: '',
      thumbnail: [],
      startDate: '',
      endDate: '',
      time: '',
      isFree: ' ',
      price: '',
      userId: '',
      address: '',
      city: '',
      province: '',
      country: '',
      booked: '',
      limit: '',
      category: '',
    },
    // validationSchema,
    onSubmit: (values) => {
      // values.price =  Number(values.price);
      // values.userId = String(userId);
      if (values.isFree) {
        values.price = '0';
      }
      console.log(values);
      createEvent({ ...values, userId: String(userId) });
    },
  });

  return (
    <>
      <main className="relative border-4 p-4 rounded-lg bg-gray-200 w-full h-full">
        <div className="flex justify-center items-center h-full">
          <Card className="w-[450px]">
            <CardHeader>
              <CardTitle className="text-center text-3xl text-primary">
                Create Your Event
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-4">
                  <FormInput
                    name="title"
                    type="text"
                    label="Title"
                    placeholder="Title"
                    value={values.title}
                    error={errors.title}
                    isError={!!touched.title && !!errors.title}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />

                  <FormTextArea
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    error={errors.description}
                    isError={!!touched.description && !!errors.description}
                  />

                  <FormInputCurrency
                    name="price"
                    type="text"
                    label="Price"
                    placeholder="Price"
                    setFieldValue={setFieldValue}
                    value={values.price}
                    error={errors.price}
                    isError={!!touched.price && !!errors.price}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />

                  <FormInput
                    name="address"
                    type="text"
                    label="Address"
                    placeholder="Address"
                    value={values.address}
                    error={errors.address}
                    isError={!!touched.address && !!errors.address}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />

                  <FormInput
                    name="city"
                    type="text"
                    label="City"
                    placeholder="City"
                    value={values.city}
                    error={errors.city}
                    isError={!!touched.city && !!errors.city}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />

                  <FormInput
                    name="province"
                    type="text"
                    label="Province"
                    placeholder="Province"
                    value={values.province}
                    error={errors.province}
                    isError={!!touched.province && !!errors.province}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />

                  <FormInput
                    name="country"
                    type="text"
                    label="Country"
                    placeholder="Country"
                    value={values.country}
                    error={errors.country}
                    isError={!!touched.country && !!errors.country}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />

                  <FormInput
                    name="booked"
                    type="text"
                    label="Booked"
                    placeholder="booked"
                    value={values.booked}
                    error={errors.booked}
                    isError={!!touched.booked && !!errors.booked}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />

                  <FormInput
                    name="limit"
                    type="text"
                    label="Limit"
                    placeholder="Limit"
                    value={values.limit}
                    error={errors.limit}
                    isError={!!touched.limit && !!errors.limit}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />

                  <FormInput
                    name="category"
                    type="text"
                    label="Category"
                    placeholder="Category"
                    value={values.category}
                    error={errors.category}
                    isError={!!touched.category && !!errors.category}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />

                  <DatePicker
                    name="startDate"
                    type="text"
                    label="Start Date"
                    placeholder="Start Date"
                    value={values.startDate}
                    isError={!!touched.startDate && !!errors.startDate}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                    handleBlur={handleBlur}
                  />

                  <DatePicker
                    name="endDate"
                    type="text"
                    label="End Date"
                    placeholder="End Date"
                    value={values.endDate}
                    isError={!!touched.endDate && !!errors.endDate}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                    handleBlur={handleBlur}
                  />

                  <FormInput
                    name="time"
                    type="time"
                    label="Time"
                    placeholder="Time"
                    value={values.time}
                    error={errors.category}
                    isError={!!touched.time && !!errors.time}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                  />

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isFree"
                      name="isFree"
                      checked={values.isFree ? true : false}
                      onClick={() => setFieldValue('isFree', !values.isFree)}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Is this event free?
                    </label>
                  </div>

                  <PreviewImages
                    fileImages={values.thumbnail}
                    onRemoveImage={(idx: number) =>
                      setFieldValue(
                        'thumbnail',
                        values.thumbnail?.toSpliced(idx, 1),
                      )
                    }
                  />

                  <Dropzone
                    isError={Boolean(errors.thumbnail)}
                    label="Thumbnail"
                    onDrop={(files) =>
                      setFieldValue('thumbnail', [
                        ...values.thumbnail,
                        ...files.map((file) => file),
                      ])
                    }
                  />
                </div>
                <Button type="submit" className="mt-6 w-full">
                  Create Event
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default CreateEventPage;
