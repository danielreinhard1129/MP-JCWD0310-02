'use client';

import React from 'react';
import { useCreatePromotion } from '@/app/hooks/api/event/useCreatePromotion';
// import { IFormCreatePromotion } from '@/app/types/promotion.type';
import { useFormik } from 'formik';
import FormInput from '@/components/Forminput';
import FormInputCurrency from '@/components/FormInputCurrency';
import { DatePicker } from '@/components/DatePicker';
import { Button } from '@/components/ui/button';

const CreatePromotionPage: React.FC = () => {
  // const [formData, setFormData] = useState<IFormCreatePromotion>({
  //   code: '',
  //   discount: 0,
  //   maxUses: 0,
  //   startDate: '',
  //   endDate: '',
  //   eventId: 0,
  // });

  const { createPromotion } = useCreatePromotion();
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
      code: '',
      discount: 0,
      maxUses: 0,
      startDate: '',
      endDate: '',
      eventId: 0,
    },
    // validationSchema,
    onSubmit: (values) => {
      console.log(values);
      createPromotion({ ...values });
    },
  });
  return (
    <main className="container mx-auto px-4">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto flex max-w-5xl flex-col gap-4">
          <FormInput
            name="code"
            type="text"
            label="Code"
            placeholder="Code"
            value={values.code}
            error={errors.code}
            isError={!!touched.code && !!errors.code}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />

          <FormInputCurrency
            name="discount"
            type="text"
            label="Discount"
            placeholder="Discount"
            setFieldValue={setFieldValue}
            value={values.discount}
            error={errors.discount}
            isError={!!touched.discount && !!errors.discount}
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
            name="maxUses"
            type="text"
            label="MaxUses"
            placeholder="MaxUses"
            value={String(values.maxUses)}
            error={errors.maxUses}
            isError={!!touched.maxUses && !!errors.maxUses}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
        <Button type="submit" className="mt-6 w-full">
          Create Promotion
        </Button>
      </form>
    </main>
  );
};

export default CreatePromotionPage;
