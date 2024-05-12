'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { FormikHandlers } from 'formik';
import { Label } from './ui/label';

interface FormInputProps {
  name: string;
  label: string;
  type: string;
  value: string;
  placeholder: string;
  isError: boolean;
  handleChange: FormikHandlers['handleChange'];
  handleBlur: FormikHandlers['handleBlur'];
  setFieldValue: any;
}

export const DatePicker: React.FC<FormInputProps> = ({
  name,
  label,
  isError,
  value,
  handleChange,
  setFieldValue,
}) => {
  const [date, setDate] = React.useState<Date>();
  React.useEffect(() => {
    console.log(value);
  }, [date]);
  return (
    <div className='flex flex-col space-y-1.5'>
    <Popover>
      <Label htmlFor={name} className={isError ? 'text-red-500' : 'text-black'}>
        {label}
      </Label>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(e) => {
            const newe = String(e?.toDateString());
            if (e) {
              setFieldValue(name, newe);
              handleChange(newe);
            }
            setDate(e);
          }}
        />
      </PopoverContent>
    </Popover>
    </div>
  );
};
