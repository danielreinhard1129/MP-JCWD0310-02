'use client';
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
import getEventAll from '../hooks/api/event/getEvent';
import { useEffect, useState } from 'react';

const UpcomingEvents = () => {
  const { getEvent } = getEventAll();

  const [data, setData] = useState([{ title: '', description: '' }]);

  const fetchingData = async () => {
    try {
      const fetchData = await getEvent();
      console.log(fetchData?.data);
      setData(fetchData?.data.data);
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div>
      <h1 className="m-10 justify-start font-bold">Upcoming Events</h1>
      <div className="m-10 gap-10">
        <Carousel>
          <CarouselContent>
            {data?.map((val, ind, arr) => {
              return (
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Card>
                    <CardHeader>
                      <CardTitle>{val.title}</CardTitle>
                      <CardDescription>{val.description}</CardDescription>
                    </CardHeader>
                    <CardContent></CardContent>
                    <CardFooter></CardFooter>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default UpcomingEvents;
