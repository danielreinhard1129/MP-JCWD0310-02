import { Tabs } from '@/components/ui/tabs';
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Checkbox } from '@/components/ui/checkbox';
import Pagination from '@/components/Pagination';
import { Filter, Search } from 'lucide-react';
import { format } from 'date-fns';
import { useDebouncedCallback } from 'use-debounce';
import useGetUserTransactionHistory from '../hooks/api/user/useGetUserTransactionHistory';

interface FilterValue {
  success: boolean;
  cancel: boolean;
  pending: boolean;
}

const UserTransactionHistory = () => {
  const [page, setPage] = useState<number>(1);
  const priceFormat = new Intl.NumberFormat('id-ID', {
    currency: 'IDR',
  });
  const [search, setSearch] = useState<string>('');
  const [filter, setFilter] = useState<string>('');
  const [filterCheckBox, setFilterCheckBox] = useState<FilterValue>({
    success: false,
    cancel: false,
    pending: false,
  });
  const { data: events, meta } = useGetUserTransactionHistory({
    page,
    take: 5,
    search,
    filter,
    userId: 2,
  });
  const handleChangePaginate = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };
  const debounceSearch = useDebouncedCallback((value) => {
    setSearch(value);
  }, 700);
  const debounceFilter = useDebouncedCallback((value) => {
    setFilter(value);
  }, 700);
  const handleFilter = (value: 'cancel' | 'pending' | 'success') => {
    setSearch('');
    setFilterCheckBox({
      success: false,
      cancel: false,
      pending: false,
      [value]: !filterCheckBox[value],
    });
    debounceFilter(value);
  };

  return (
    <Tabs className="flex flex-col gap-4">
      <div className="flex md:flex-row flex-col gap-4 justify-between">
        <div className="flex flex-row gap-2">
          <div className="flex-1 relative max-w-[400px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
            <Input
              className="w-full rounded-md border border-gray-200 bg-white px-10 py-2 text-sm focus:border-gray-300 focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50"
              placeholder="Search for events"
              type="search"
              onChange={(e) => {
                debounceSearch(e.target.value);
              }}
            />
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="shrink-0" variant="outline">
              <Filter className="mr-2 h-5 w-5" />
              Filters
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Label className="flex items-center gap-2" htmlFor="Jakarta">
                  <Checkbox
                    onClick={() => {
                      handleFilter('success');
                    }}
                    checked={filterCheckBox.success}
                  />
                  Paid
                </Label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Label className="flex items-center gap-2" htmlFor="Surabaya">
                  <Checkbox
                    onClick={() => {
                      handleFilter('pending');
                    }}
                    checked={filterCheckBox.pending}
                  />
                  Waiting for Payment
                </Label>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Label className="flex items-center gap-2" htmlFor="Yogyakarta">
                  <Checkbox
                    type="submit"
                    onClick={() => {
                      handleFilter('cancel');
                    }}
                    checked={filterCheckBox.cancel}
                  />
                  Cancelled
                </Label>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Table>
        <TableCaption>History of your events.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Event</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((val, indx, arr) => {
            return (
              <TableRow>
                <TableCell className="font-medium">{val.title}</TableCell>
                <TableCell>
                  {val.transaction.length
                    ? val.transaction[0].status.toUpperCase()
                    : 'Undefined'}
                </TableCell>
                <TableCell>{format(val.startDate, 'dd-MM-yyyy')}</TableCell>
                <TableCell className="truncate max-w-[400px]">
                  {val.location
                    ? `${val.location.address},${val.location.city},${val.location.province},${val.location.country}`
                    : ''}
                </TableCell>
                <TableCell className="text-right">
                  {priceFormat.format(val.price)}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="flex justify-center">
        <Pagination
          total={meta?.total || 0}
          take={meta?.take || 0}
          onChangePage={handleChangePaginate}
        />
      </div>
    </Tabs>
  );
};

export default UserTransactionHistory;
