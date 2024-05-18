'use client';
import useGetEvents from '@/app/hooks/api/event/useGetEvents';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

export function RecentEvent() {
  const { data, isLoading, meta } = useGetEvents({
    search: '',
  });
  useEffect(() => {
    console.log(data);
  }, [data]);

  const formatDate = (date: Date) => format(date, 'dd MMMM yyyy');

  return (
    <div className="space-y-8">
      {data?.map((value) => {
        return (
          <>
            <div className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">
                  {value.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {value.location.country},{value.location.province},
                  {value.location.city},{value.location.address}
                </p>
              </div>
              <div className="ml-auto font-medium">
                {formatDate(value.startDate)}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
