'use client';

import { FormikHandlers } from 'formik';
import CurrencyInput from 'react-currency-input-field';
import { Label } from './ui/label';
interface FormInputProps {
  name: string;
  label: string;
  type: string;
  value: any;
  placeholder: string;
  isError: boolean;
  error: string | undefined;
  setFieldValue: any;
  handleChange: FormikHandlers['handleChange'];
  handleBlur: FormikHandlers['handleBlur'];
}

const FormInputCurrency: React.FC<FormInputProps> = ({
  name,
  label,
  type = 'number',
  isError,
  placeholder,
  value,
  error,
  setFieldValue,
  handleBlur,
}) => {
  return (
    <>
      <Label htmlFor={name} className={isError ? 'text-red-500' : 'text-black'}>
        {label}
      </Label>
      <CurrencyInput
        name={name}
        id={name}
        intlConfig={{ locale: 'id-ID', currency: 'IDR' }}
        placeholder={placeholder}
        step={10000}
        onBlur={handleBlur}
        decimalsLimit={2}
        onValueChange={(value, name, values) => {
          if (Number(value) > 0 || value == '') {
            setFieldValue(name, value);
          }
        }}
        value={value}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
      {isError ? <div className="text-xs text-red-500">{error}</div> : null}
    </>
  );
};

export default FormInputCurrency;
