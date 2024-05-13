'use client';

import { cn } from '@/lib/utils';
import { SearchIcon } from 'lucide-react';

import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

interface SearchBarDebouncProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  callBack: (value: string) => void;
}

const SearchBarDebounce: React.FC<SearchBarDebouncProps> = ({
  callBack,
  className,
  ...props
}) => {
  const [text, setText] = useState('');
  const debounced = useDebouncedCallback((value) => {
    callBack(value);
  }, 500);

  return (
    <>
      <div
        className={cn(
          'flex flex-row justify-center px-2 rounded-xl items-center bg-white',
          className,
        )}
      >
        <SearchIcon/>
        <input
          type="text"
          className="w-full h-10 px-2 focus-visible:outline-none"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            debounced(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default SearchBarDebounce;
