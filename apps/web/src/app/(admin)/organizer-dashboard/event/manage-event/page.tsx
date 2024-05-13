'use client';
import SearchBarDebounce from '@/app/components/Sidebar/SearchBarDebounce';
import { Button } from '@/components/ui/button';
import React from 'react';
import ListEventCard from '../components/ListEventCard';

const ManageEventPage = () => {
  const handleSearchBar = (value: string) => {
    // Logic fetching data with using debounce
  };

  const handleClickSearch = () => {
    // Logic click search icon
  };

  return (
    <main className="relative border-4 p-4 rounded-lg bg-gray-200 w-full h-full">
      {/* Top Element Searchbar and Filter Button */}

      <div className="flex flex-row gap-4 justify-between items-center">
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

      {/* Table List Button Filter */}
      <div className="w-full relative py-8">
        <div className="w-full flex flex-row gap-6">
          <div>
            <Button className="bg-indigo-950 text-[#ffff00]">
              Active Event
            </Button>
          </div>
          <div>
            <Button className="bg-indigo-950 text-[#ffff00]">
              Recent Event
            </Button>
          </div>
        </div>
      </div>

      {/* Table List */}

      <div className="w-full flex flex-col gap-8">
        <ListEventCard
          clickUrl='/1'
          title="Jogja Festival by DWP"
          thumbnail="/eventDwp.jpg"
          location="Jln.Sultan Agung , Pakualaman , Sleman , Jogjakarta"
          time={new Date()}
          startDate={new Date()}
          endDate={new Date()}
        />
      </div>
    </main>
  );
};

export default ManageEventPage;
