'use client';
import EventCard from '@/components/EventCard';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import useGetEvents from '../hooks/api/event/useGetEvents';
import { appConfig } from '@/utils/config';

const UpcomingEvents = () => {
  const { data: events } = useGetEvents({});
  return (
    <div>
      <h1 className="m-10 justify-start font-bold">Upcoming Events</h1>
      <div className="m-10 gap-10">
        <Carousel>
          <CarouselContent>
              <CarouselItem className="grid grid-cols-4 gap-8">
                {events.map((event, index) => {
                  return (
                    <EventCard 
                      key={index}
                      title={event.title}
                      description={event.description}
                      category={event.category}
                      price={event.price}
                      booked={`Booked: ${String(event.booked)}`}
                      limit={`Available Seats: ${String(event.limit)}`}
                      startDate={new Date(event.startDate)}
                      endDate={new Date(event.endDate)}
                      time={`Time: ${String(event.time)}`}
                      imageUrl={appConfig.baseUrl + `/assets${event.thumbnail}`}
                      eventId={event.id}
                    />
                  );
                })}
              </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default UpcomingEvents;
