'use client';

import useGetEvents from '@/app/hooks/api/event/useGetEvents';
import EventCard from '@/components/EventCard';
import Pagination from '@/components/Pagination';
import { appConfig } from '@/utils/config';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenu,
} from '@/components/ui/dropdown-menu';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import Autocomplete from '@/components/Autocomplete';

const Concert = () => {
  const [page, setPage] = useState<number>(1);
  const { data: events, meta } = useGetEvents({
    page,
    take: 3,
  });

  const handleChangePaginate = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  return (
    <>
      <div className="w-full bg-gray-100 dark:bg-gray-950 py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center gap-4">
          <div className="flex-1 relative">
            <Autocomplete />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="shrink-0" variant="outline">
                <FilterIcon className="mr-2 h-5 w-5" />
                Filters
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Filter by Location</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Label className="flex items-center gap-2" htmlFor="Jakarta">
                    <Checkbox id="jakarta" />
                    Jakarta{'\n                              '}
                  </Label>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Label className="flex items-center gap-2" htmlFor="Surabaya">
                    <Checkbox id="surabaya" />
                    Surabaya{'\n                              '}
                  </Label>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Label
                    className="flex items-center gap-2"
                    htmlFor="Yogyakarta"
                  >
                    <Checkbox id="yogyakarta" />
                    Yogyakarta{'\n                              '}
                  </Label>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Filter by Category</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Label className="flex items-center gap-2" htmlFor="Pop">
                    <Checkbox id="pop" />
                    Pop{'\n                              '}
                  </Label>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Label className="flex items-center gap-2" htmlFor="Rock">
                    <Checkbox id="rock" />
                    Rock{'\n                              '}
                  </Label>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Label className="flex items-center gap-2" htmlFor="R&B">
                    <Checkbox id="r&b" />
                    R&B{'\n                              '}
                  </Label>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 py-8 md:grid-cols-4">
        {events.map((event, index) => {
          return (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              category={event.eventCategory[0].category.title}
              price={event.price}
              booked={`Booked: ${String(event.booked)}`}
              limit={`Available Seats: ${String(event.limit-event.booked)}`}
              startDate={new Date(event.startDate)}
              endDate={new Date(event.endDate)}
              time={event.time}
              imageUrl={appConfig.baseUrl + `/assets${event.thumbnail}`}
              eventId={event.id}
            />
          );
        })}
      </div>
      <div className="my-8 flex justify-center ">
        <Pagination
          total={meta?.total || 0}
          take={meta?.take || 0}
          onChangePage={handleChangePaginate}
        />
      </div>
    </>
  );
};

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function FilterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default Concert;
