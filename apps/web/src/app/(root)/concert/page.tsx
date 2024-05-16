'use client';

import useGetEvents from '@/app/hooks/api/event/useGetEvents';
import EventCard from '@/components/EventCard';
import Pagination from '@/components/Pagination';
import { appConfig } from '@/utils/config';
import { useState } from 'react';

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
    <main>
      <section className="grid grid-cols-3 gap-8 mx-14">
        {events.map((event, index) => {
          return (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              category={event.category}
              price={event.price}
              booked={String(event.booked)}
              limit={String(event.limit)}
              startDate={new Date(event.startDate)}
              endDate={new Date(event.endDate)}
              time={event.time}
              imageUrl={appConfig.baseUrl + `/assets${event.thumbnail}`}
              eventId={event.id}
            />
          );
        })}
      </section>
      <div className="my-8 flex justify-center ">
        <Pagination
          total={meta?.total || 0}
          take={meta?.take || 0}
          onChangePage={handleChangePaginate}
        />
      </div>
    </main>
  );
};

export default Concert;
