'use client';

import { FormikHandlers } from 'formik';
import React from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface FormInputProps {
  name: string;
  label: string;
  type: string;
  value: string;
  placeholder: string;
  isError: boolean;
  error: string | undefined;
  handleChange: FormikHandlers['handleChange'];
  handleBlur: FormikHandlers['handleBlur'];
}

const FormInputDarkMode: React.FC<FormInputProps> = ({
  name,
  label,
  type = 'text',
  isError,
  placeholder,
  value,
  error,
  handleChange,
  handleBlur,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <Label htmlFor={name} className={isError ? 'text-red-500' : 'text-indigo-950 text-base font-extrabold'}>
        {label}
      </Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={handleChange}
        value={value}
        className={`bg-indigo-950 border-0 transition-all duration-500 border-b-2 rounded-s border-[#ffff00] text-[#ffff00] focus-visible:ring-0 focus-visible:ring-[#ffff00] focus-visible:ring-offset-[#ffff00] ${isError ? 'border-red-500' : ''}`}
      />
      {isError ? <div className="text-xs text-red-500">{error}</div> : null}
    </div>
  );
};

export default FormInputDarkMode;
