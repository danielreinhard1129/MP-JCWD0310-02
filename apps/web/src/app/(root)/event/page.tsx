'use client';

import { useEffect, useState } from 'react';
import getEventAll from '../../hooks/api/event/getEvent';

const Event = () => {
  const [eventData, setEventData] = useState();
  const { getEvent } = getEventAll();

  const fetchingEventData = async () => {
    try {
      const data = await getEvent();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchingEventData();
  }, []);

  return <div>Event</div>;
};

export default Event;
