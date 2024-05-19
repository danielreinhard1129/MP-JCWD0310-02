'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { CircleCheck } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/DataTable/DataTable/DataTable';
import { type ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { Label } from '../ui/label';

interface Transaction {}

export const TransactionList = ({ data }: { data: any }) => {
  const router = useRouter();
  const columns: ColumnDef<any>[] = [
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
      filterFn: 'inNumberRange',
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
      <Separator />
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};
