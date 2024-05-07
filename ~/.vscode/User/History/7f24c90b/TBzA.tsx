'use client';
import FormInput from '@/components/FormInput';
// import FormTextArea
import RichTextEditor from '@/components/ui/RichTextEditor';
import { error } from 'console';
import { Formik, useFormik } from 'formik';

const Write = () => {
  const {
    errors,
    handleBlur,
    handleReset,
    handleChange,
    handleSubmit,
    values,
    setFieldValue,
    touched,
  } = useFormik({
    initialValues: {
      content: '',
    },
    onSubmit: (values) => {},
  });

  return (
    <RichTextEditor
      onChange={(html: string) => setFieldValue('content', html)}
      label="Content"
      value={values.content}
      isError={Boolean(errors.content)}
    />
  );
};

export default Write;
