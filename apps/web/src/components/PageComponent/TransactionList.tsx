'use client';
import React from 'react';
import { Heading } from '@/components/Common/Heading';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { CircleCheck, Plus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/DataTable/DataTable/DataTable';
import { Checkbox } from '@/components/ui/checkbox';
import { type ColumnDef } from '@tanstack/react-table';
import { CellAction } from './CellAction';
import { Event } from '@/app/types/event.type';
import { format } from 'date-fns';
import { Label } from '../ui/label';

interface Transaction {}

export const TransactionList = ({ data }: { data: [] }) => {
  const router = useRouter();
  const columns: ColumnDef<Event>[] = [
    {
      accessorKey: 'event',
      header: 'Event',
    },
    {
      header: 'Amounts',
      accessorKey: 'amounts',
    },
    {
      header: 'User',
      accessorFn: (data) => {
        const user = data.user;
        return user;
      },
    },
    {
      header: 'Quantity',
      accessorFn: (data) => {
        return data.quantity;
      },
      filterFn : "inNumberRange",
    },
    {
      header: 'Status',
      accessorKey: 'status',
      cell: (props) => (
        <div className="flex flex-row gap-2 items-center">
          <CircleCheck className="text-green-500" />
          <Label className="font-light">{props.getValue().toUpperCase()}</Label>
        </div>
      ),
    },
    {
      header: 'Date',
      accessorFn: (data) => {
        return format(data.date, 'yyyy.MM.dd');
      },
    },
  ];
  return (
    <>
        <DataTable columns={columns} data={data} />
    </>
  );
};
