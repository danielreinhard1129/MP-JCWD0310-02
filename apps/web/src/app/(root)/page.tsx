'use client'

import { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import RegisterAsOrganizer from "../components/RegisterAsOrganizer";
import SearchByCategory from "../components/SearchByCategory";
import SearchByLocation from "../components/SearchByLocation";
import UpcomingEvents from "../components/UpcomingEvents";
import useGetEvents from "../hooks/api/event/useGetEvents";
import Pagination from "@/components/Pagination";
import { appConfig } from "@/utils/config";
import Autocomplete from "@/components/Autocomplete";
import EventCard from "@/components/EventCard";

export default function Home() {
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
      <Jumbotron/>
      <RegisterAsOrganizer/>
      {/* <UpcomingEvents/>
      <SearchByCategory/>
      <SearchByLocation/> */}

<section className="grid grid-cols-3 gap-8">
  {events.map((event, index) => {
    return (
      <EventCard
        key={index}
        title={event.title}
        description={event.description}
        category={event.category}
        price={String(event.price)}
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
  )
}
