'use client';
import useGetUserEventHistory from '@/app/hooks/api/user/useGetUserEventHistory';
import { useAppSelector } from '@/app/redux/hook';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { appConfig } from '@/utils/config';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ResponsiveContainer } from 'recharts';

export function RecentEvent() {
  const router = useRouter();
  const user = useAppSelector((state) => state.user);
  const { data } = useGetUserEventHistory({
    search: '',
    userId: Number(user.userId),
  });
  useEffect(() => {}, [data]);

  const formatDate = (date: Date) => format(date, 'dd MMMM yyyy');

  return (
    <ResponsiveContainer width="100%">
      <div className="space-y-4">
        {data?.map((value , indx) => {
          return (
            <>
              <div
                key={indx}
                onClick={() =>
                  router.push(
                    `/organizer-dashboard/event/manage-event/${value.id}`,
                  )
                }
                className="flex items-center hover:bg-muted cursor-pointer p-4 rounded-xl"
              >
                <Avatar className="h-9 w-9">
                  <AvatarImage
                    src={`${appConfig.baseUrl}/assets${value.thumbnail}`}
                    alt="Avatar"
                  />
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
    </ResponsiveContainer>
  );
}
