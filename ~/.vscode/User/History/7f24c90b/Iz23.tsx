'use client';
import FormInput from '@/components/FormInput';
import DropZone from '@/components/ui/DropZone';
// import FormTextArea
import RichTextEditor from '@/components/ui/RichTextEditor';
import { error } from 'console';
import { Formik, useFormik } from 'formik';
import { boolean } from 'yup';

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
      title: '',
      content: '',
      thumbnail:"", 
    },
    onSubmit: (values) => {},
  });

  return (
    <main className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto f;ex max-w-5xl flex-col gap-5">
          <FormInput
            name="title"
            label="Title"
            error={errors.title}
            isError={errors.title}
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder=""
            type=""
            value=""
          />
          <DropZone isError={Boolean(errors.thumbnail)} label="Thumbnail" onDrop={(files)=>{
            setFieldValue("thumbnail" , [
                ...values.thumbnail,
                ...files.map((file)=>file),
            ])
          }} />
          <RichTextEditor
            onChange={(html: string) => setFieldValue('content', html)}
            label="Content"
            value={values.content}
            isError={Boolean(errors.content)}
          />
        </div>
      </form>
    </main>
  );
};

export default Write;
