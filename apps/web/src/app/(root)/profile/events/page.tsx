'use client';
import SearchBarDebounce from '@/app/components/Sidebar/SearchBarDebounce';
import { Event } from '@/app/types/event.type';
import { Button } from '@/components/ui/button';
import useGetEvents from '@/app/hooks/api/event/useGetEvents';
import React, { useEffect, useState } from 'react';
import ListEventCard from '@/app/(admin)/organizer-dashboard/event/components/ListEventCard';
import { useRouter } from 'next/navigation';

const EventListPage = () => {
  const [eventData, setEventData] = useState<Event[]>([]);
  const router = useRouter();
  const [filteredData, setFilteredData] = useState<Event[]>([]);
  const { data, isLoading, meta } = useGetEvents({});

  useEffect(() => {
    setEventData(data);
    setFilteredData(data);
  }, [isLoading]);

  const handleSearchBar = (value: string) => {
    const regexSearch = new RegExp('(' + value.toLowerCase() + ')', 'g');
    const searchData = eventData.filter((val: Event) =>
      val.title.toLowerCase().match(regexSearch),
    );
    setFilteredData(searchData);
  };

  const handleBack = () => {
    router.back();
  }

  const handleClickSearch = () => {
    // Logic click search
  };
  return (
    <main className="relative min-h-[90vh] border-4 p-4 rounded-lg bg-gray-200 w-full h-full">
      {/* Top Element Searchbar and Filter Button */}

        <Button 
        onClick={handleBack}
        className="w-28 text-[#ffff00] mb-4 bg-indigo-950 font-extrabold">
          Back to Profile
        </Button>
      <div className="flex md:flex-row flex-col gap-4 justify-between items-center">
        <div id="searchBar" className="w-full bg-[#FBFBF8] rounded-2xl">
          <SearchBarDebounce
            className="border-indigo-950 border-2 text-indigo-950"
            callBack={(value) => handleSearchBar(value)}
          />
        </div>
        <Button className="w-28 text-[#ffff00] bg-indigo-950 font-extrabold">
          Filter
        </Button>
      </div>

      {/* Table List */}

      <div className="w-full min-h-[50vh] pt-4 flex flex-col gap-8">
        {!isLoading ? (
          filteredData?.map((val, ind, arr) => {
            return (
              <ListEventCard
                clickUrl={String(val.id)}
                title={val.title}
                thumbnail={val.thumbnail}
                location={val.description}
                time={new Date()}
                startDate={new Date(val.startDate)}
                endDate={new Date(val.endDate)}
              />
            );
          })
        ) : (
          <div className="flex justify-center h-full items-center font-extrabold text-4xl text-indigo-950">
            <p>Loading ...</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default EventListPage;
