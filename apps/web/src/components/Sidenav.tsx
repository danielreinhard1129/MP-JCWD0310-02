'use client'

import React, { useState } from 'react';

const Sidenav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div
        className={`bg-gray-800 text-white flex flex-col w-64 sm:w-16 md:w-64 ${
          isOpen ? 'hidden' : ''
        }`}
      >
        <button onClick={toggleSidebar} className=" mb-7 sm:hidden md:block">
          Organizer Dashboard
        </button>
        <button>Attendee Lists</button>
        <button> Event Transaction</button>
        <button> Event Transaction</button>
        <button>Event Statistics</button>
      </div>
      <div>
        <div className="p-5">
          <h1 className="text-3xl font-bold">
            Welcome to Organizer Dashboard
          </h1>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
