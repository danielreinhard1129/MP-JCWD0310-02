'use client';

import { appConfig } from '@/utils/config';
import { useState } from 'react';
import Asyncselect from 'react-select/async';
import { debounce } from 'lodash';
import { useRouter } from 'next/navigation';
import useGetEvents from '@/app/hooks/api/event/useGetEvents';

interface EventOption {
  value: number;
  label: string;
}

const Autocomplete = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>('');

  const { data, isLoading } = useGetEvents({ search });

  const loadOptions = (
    inputValue: string,
    callback: (options: EventOption[]) => void,
  ) => {
    try {
      const options = data.map((event) => {
        return {
          label: event.title,
          value: event.id,
        };
      });
      callback(options);
      setSearch(inputValue)
    } catch (error) {
      callback([]);
    }
  };

  const debouncedLoadOptions = debounce(loadOptions, 750);

  return (
    <Asyncselect
      placeholder="Search for events"
      className="mx-auto md:mx-64"
      loadOptions={debouncedLoadOptions}
      isLoading={isLoading}
      onChange={(event) => {
        router.push(appConfig.baseUrlNext + `/${event?.value}`);
      }}
    />
  );
};

export default Autocomplete;
