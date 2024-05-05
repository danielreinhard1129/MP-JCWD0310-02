'use client';
import { FormikConfig, FormikHandlers } from 'formik';
import { FormEventHandler } from 'react';

export interface FormCard {
  InputForm: {
    name: string;
    label: string;
    type: string;
    inputLabel: string;
  }[];

  button: {
    buttonLabel: string;
  };

  formik: FormikHandlers;
}

export const FormCard = (formik: FormCard) => {
  return (
    <form onSubmit={formik.formik.handleSubmit}>
      <div className="w-[100%] h-[100%] rounded-2xl border-black border-2 flex flex-col bg-blue-500 p-8 gap-4 items-center">
        {formik?.InputForm.map((item, index, array) => {
          return (
            <div
              key={index}
              className="flex flex-col text-center gap-2 w-[70%]"
            >
              <p>{item.label}</p>
              <input
                name={item.name}
                onChange={formik.formik.handleChange}
                className="rounded-full h-12 pl-4 pr-4"
                type={item.type}
                placeholder={item.inputLabel}
              />
            </div>
          );
        })}
        <button className="bg-white w-20 h-10 rounded-full">
          {formik.button.buttonLabel}
        </button>
      </div>
    </form>
  );
};
