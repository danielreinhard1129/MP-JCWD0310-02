'use client';

import useGetEvent from '@/app/hooks/api/event/useGetEvent';
import { Button } from '@/components/ui/button';
import { appConfig } from '@/utils/config';
import { CalendarRangeIcon } from 'lucide-react';
import { notFound } from 'next/navigation';
import ReviewForm from './components/ReviewForm';
import SkeletonBlogDetail from './components/SkeletonEventDetail';
import { format } from 'date-fns';

const EventDetail = ({ params }: { params: { id: string } }) => {
  const { event, isLoading } = useGetEvent(Number(params.id));
  const priceFormat = new Intl.NumberFormat('id-ID', {
    currency: 'IDR',
    style: 'currency',
  });

  if (isLoading) {
    return (
      <div className="container mx-auto px-4">
        <SkeletonBlogDetail />
      </div>
    );
  }

  if (!event) {
    return notFound();
  }

  
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                {event.title}
              </h1>
              <div className="flex items-center space-x-4">
                <div className="inline-flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                  <CalendarRangeIcon className="h-5 w-5" />
                  <span>
                    {format(event.startDate, 'dd-MM-yyyy')} -{' '}
                    {format(event.endDate, 'dd-MM-yyyy')}
                  </span>
                </div>
                <div className="inline-flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                  <ClockIcon className="h-5 w-5" />
                  <span>{event.time}</span>
                </div>
              </div>
              <div className="inline-flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <MapPinIcon className="h-5 w-5" />
                <span>{event.location.address}</span>
              </div>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                {event.location.city}
              </p>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                {event.description}
              </p>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                {priceFormat.format(event.price)}
              </p>
            </div>
            <Button>Check out</Button>
          </div>
          <img
            alt="Event"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            height="550"
            src={`${appConfig.baseUrl}/assets${event.thumbnail}`}
            width="550"
          />
        </div>
      </div>

      <div className=" h-0 w-full bg-black border"></div>

      <div className="mx-auto max-w-md space-y-6 px-4 py-12">
        <div>
          <ReviewForm />
        </div>
      </div>

      
    </section>
  );
};

function CalendarIcon(props: any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ClockIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon(props: any) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default EventDetail;
