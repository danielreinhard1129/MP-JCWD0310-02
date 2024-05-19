'use client';
import { Heading } from '../Common/Heading';
import { Separator } from '../ui/separator';
import CreateEventForm from '../Dashboard/CreateEventForm';
import { Event } from '@/app/types/event.type';
import { Label } from '../ui/label';
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Input } from '../ui/input';
import PreviewImages from '../PreviewImages';
import { useFormik } from 'formik';
import Dropzone from '../Dropzone';
import { Textarea } from '../ui/textarea';
import FormInputCurrency from '../FormInputCurrency';
import { DatePickerWithRange } from '@/app/components/DateRange';
import { Button } from '../ui/button';
import useCreateEvent from '@/app/hooks/api/event/createEvent';
import { Checkbox } from '../ui/checkbox';
import { ConfirmModal } from '../Common/ConfirmModal';
import { DialogAlert } from '../Common/DialogAlert';
import { useRouter } from 'next/navigation';
import CreateEventValidation from '../Dashboard/CreateEventValidation';
import { TimePicker } from '../Dashboard/TimePicker';
import Image from 'next/image';

const EventDetailManage = ({ eventData }: { eventData: Event }) => {
  const router = useRouter();
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [event, setEvent] = useState<Event>();
  const [progress, setProgress] = useState(false);
  const { createEvent } = useCreateEvent();
  useEffect(() => {
    if (eventData) {
      setEvent(eventData);
    }
  }, [event]);
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      title: eventData?.title,
      description: eventData?.description,
      price: eventData?.price,
      booked: eventData?.booked,
      limit: eventData?.limit,
      startDate: eventData?.startDate,
      endDate: eventData?.endDate,
      address: eventData?.location.address,
      isFree: eventData?.isFree,
      time: eventData?.time,
      city: eventData?.location.city,
      province: eventData?.location.province,
      country: eventData?.location.country,
      category: eventData?.eventCategory[0].category.title,
      thumbnail: [],
    },
    validationSchema: CreateEventValidation,
    onSubmit: (values) => {
      setProgress(true);
        createEvent(values).finally(() => {
          setProgress(false);
          setSuccessModalOpen(true);
          setTimeout(() => {
            router.push('/organizer-dashboard');
          }, 1000);
        });
      console.log(values);
    },
  });

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={eventData.title}
          description="You can change your event detail"
        />
      </div>
      <Separator />
      <div>
        <div className="space-y-4">
          <Card>
            {/* <CardHeader> */}
            {/* <CardTitle>Input your forms to create event</CardTitle> */}
            {/* </CardHeader> */}
            <CardContent className="flex py-8 flex-col gap-8">
              {/* Thumbnail Images Forms */}
              <div>
                <Label>Events Thumbnail</Label>
                <Image
                  alt="thumbnail"
                  src={eventData.thumbnail}
                  width={100}
                  height={100}
                />
                {values.thumbnail ? (
                  ''
                ) : (
                  <Dropzone
                    isError={!!touched.thumbnail && !!errors.thumbnail}
                    label=""
                    onDrop={(files) =>
                      setFieldValue('thumbnail', [...files.map((file) => file)])
                    }
                  />
                )}
              </div>
              {/* Thumbnail Images Forms */}

              {/* Title Forms */}
              <div className="max-w-[300px]">
                <Label>Title Event</Label>
                <Input
                  name="title"
                  error={errors.title}
                  value={values.title}
                  onChange={(e) => {
                    setFieldValue('title', e.target.value);
                  }}
                  placeholder="Title for your event"
                />
              </div>
              {/* Title Forms */}

              {/* Description Text Area Forms */}
              <div>
                <Label>Description</Label>
                <Textarea
                  name="description"
                  error={errors.description}
                  value={values.description}
                  onChange={(e) => {
                    setFieldValue('description', e.target.value);
                  }}
                  placeholder="Write a description for describe what is your event"
                />
              </div>
              {/* Description Text Area Forms */}

              {/* Category Forms */}
              <div className="max-w-[300px]">
                <Label>Category</Label>
                <Input
                  name="category"
                  error={errors.category}
                  value={values.category}
                  onChange={(e) => {
                    setFieldValue('category', e.target.value);
                  }}
                  placeholder="Category for your event"
                />
              </div>
              {/* Category Forms */}

              {/* Prices Forms */}
              <div className="flex flex-col max-w-[300px]">
                <div className="flex flex-row items-center space-x-2 mb-4">
                  <Checkbox
                    id="isFree"
                    onClick={() => setFieldValue('isFree', !values.isFree)}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Is this event is Free?
                  </label>
                </div>
                <FormInputCurrency
                  error={errors.price}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  label="Price"
                  placeholder="Input prices"
                  value={values.price}
                  isError={!!touched.price && !!errors.price}
                  name="price"
                  type="number"
                  setFieldValue={setFieldValue}
                />
              </div>
              <div className="max-w-[300px]">
                {/* Prices Forms */}

                <Label>Limit Tickets</Label>
                <Input
                  name="limit"
                  value={values.limit}
                  error={errors.limit}
                  onChange={(e) => {
                    setFieldValue('limit', e.target.value);
                  }}
                  placeholder="Limit of your ticket purchase"
                />
              </div>
              {/* Limit Ticket Forms */}

              {/* Booked Forms */}
              <div className="max-w-[300px]">
                <Label>Booked</Label>
                <Input
                  name="booked"
                  value={values.booked}
                  error={errors.booked}
                  onChange={(e) => {
                    setFieldValue('booked', e.target.value);
                  }}
                  placeholder="Input a booked value if your event has a manual ticket sold"
                />
              </div>
              <div>
                {/* Booked Forms */}

                {/* Address Forms */}
                <Card id="Address Details">
                  <CardHeader>
                    <CardTitle>Address of your Event will be held</CardTitle>
                    <Label className="text-sm font-normal text-muted-foreground">
                      The address must be valid address
                    </Label>
                  </CardHeader>
                  <CardContent className="flex py-4 flex-col gap-4">
                    <div className="max-w-[300px]">
                      <Label>Address Detail :</Label>
                      <Input
                        name="address"
                        value={values.address}
                        error={errors.address}
                        onChange={(e) => {
                          setFieldValue('address', e.target.value);
                        }}
                        placeholder="Input detail address ex: road name,apartment,building"
                      />
                    </div>
                    <div className="max-w-[300px]">
                      <Label>City :</Label>
                      <Input
                        name="city"
                        value={values.city}
                        error={errors.city}
                        onChange={(e) => {
                          setFieldValue('city', e.target.value);
                        }}
                        placeholder="Input the City ex: Sleman"
                      />
                    </div>
                    <div className="max-w-[300px]">
                      <Label>Province :</Label>
                      <Input
                        name="province"
                        value={values.province}
                        error={errors.province}
                        onChange={(e) => {
                          setFieldValue('province', e.target.value);
                        }}
                        placeholder="Input the Province ex: Jogjakarta"
                      />
                    </div>
                    <div className="max-w-[300px]">
                      <Label>Country :</Label>
                      <Input
                        name="country"
                        value={values.country}
                        error={errors.country}
                        onChange={(e) => {
                          setFieldValue('country', e.target.value);
                        }}
                        placeholder="Input the Country ex: Indonesia"
                      />
                    </div>
                  </CardContent>
                </Card>
                {/* Address Forms */}
              </div>

              {/* Time Form */}

              {/* Event Time Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Time of your event will be start</CardTitle>
                  <Label className="text-sm font-normal text-muted-foreground">
                    Set the hours with keyboard arrows or click and input number
                  </Label>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <div className="max-w-[300px]">
                    <Label>Time :</Label>
                    <TimePicker
                      onChange={(e) => setFieldValue('time', e.toString())}
                      hourCycle={24}
                    />
                  </div>
                  {/* Time Form */}

                  {/* Start Date and End Date Form */}
                  <div>
                    <Label>Set the start date and end date of your event</Label>
                    <DatePickerWithRange
                      startDate={() => {}}
                      handleChange={(start, end) => {
                        setFieldValue('startDate', start);
                        setFieldValue('endDate', end);
                        console.log(values);
                      }}
                      endDate={() => {}}
                      className={''}
                    />
                  </div>
                  {/* Start Date and End Date Form */}
                </CardContent>
              </Card>
              {/* Event Time Form */}
            </CardContent>
            <CardFooter className="flex flex-row justify-between">
              <Label>*Please check your forms before submit the forms</Label>
              <Button
                onClick={() => {
                  console.log(errors);
                  !Object.keys(errors).length
                    ? setConfirmModalOpen(true)
                    : setAlertModalOpen(true);
                }}
              >
                Submit
              </Button>
            </CardFooter>
          </Card>
          <DialogAlert
            title="Errors"
            description={`Please Input Forms Correctly!`}
            name={values.title}
            isOpen={alertModalOpen}
            onClose={() => setAlertModalOpen(false)}
          />
          <DialogAlert
            title="Success"
            description={`Success Create Events,Wait a second you will be redirect to dashboard`}
            // name={values.title}
            isOpen={successModalOpen}
            onClose={() => setSuccessModalOpen(false)}
          />
          <ConfirmModal
            title="Create Events"
            description="Please be sure to check the form before continue."
            name={values.title}
            isOpen={confirmModalOpen}
            onClose={() => setConfirmModalOpen(false)}
            onConfirm={() => handleSubmit()}
            loading={progress}
          />
        </div>
      </div>
    </>
  );
};

export default EventDetailManage;
