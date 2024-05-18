'use client';
import React from 'react';
import { Heading } from '@/components/Common/Heading';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { DataTable } from '@/components/ui/DataTable/DataTable/DataTable';
import { Checkbox } from '@/components/ui/checkbox';
import { type ColumnDef } from '@tanstack/react-table';
import { CellAction } from './CellAction';
import { Event } from '@/app/types/event.type';
import { format } from 'date-fns';

export const EventList = ({ data }: { data: Event[] }) => {
  const router = useRouter();
  const columns: ColumnDef<Event>[] = [
    {
      id: 'select',
      // header: ({ table }) => (
      //   <Checkbox
      //     checked={
      //       table.getIsAllPageRowsSelected() ||
      //       (table.getIsSomePageRowsSelected() && 'indeterminate')
      //     }
      //     onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      //     aria-label="Select all"
      //     className="translate-y-[2px]"
      //   />
      // ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-[2px]"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'title',
      header: 'Title',
    },
    {
      accessorFn: (data) => {
        const title = data.eventCategory[0].category.title;
        return title;
      },
      header: 'Category',
    },
    {
      accessorFn:data => {
        return data.time
      } ,
      header: 'Time',
    },
    {
      header: 'Start Date',
      accessorFn : (data) => {
        return format(data.startDate,'yyyy.MM.dd')
      }
    },
    {
      header: 'End Date',
      accessorFn : (data) => {
        return format(data.endDate,'yyyy.MM.dd')
      }
    },
    {
      id: 'actions',
      enableSorting: false,
      cell: ({ row }) => <CellAction data={row.original} />,
    },
  ];
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title="Event Management"
          description="Manage your event"
        />
        <Button
          onClick={() => {
            router.push('/organizer-dashboard/event/create-event');
          }}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <div>
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};
