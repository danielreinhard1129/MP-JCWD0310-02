import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';

interface EventCardProps {
  title: string;
  description: string;
  price: number;
  booked: string;
  limit: string;
  imageUrl: string;
  startDate: Date;
  endDate: Date;
  time: string;
  category: string;
  eventId: number;
}

const EventCard: FC<EventCardProps> = ({
  title,
  description,
  price,
  booked,
  limit,
  category,
  imageUrl,
  startDate,
  endDate,
  time,
  eventId,
}) => {
  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(price);

  return (
    <Link href={`/event/${eventId}`}>
      <Card className="w-full max-w-[300px]">
      <div className="relative overflow-hidden rounded-lg">
        <img
          alt="thumbnail"
          className="aspect-[3/2] w-full object-cover"
          height="120"
          src={imageUrl}
          width="180"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-2 left-2 text-white">
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-xs">{format(startDate, 'dd MMMM yyyy')} - {format(endDate, 'dd MMMM yyyy')}, {time}</div>
        </div>
      </div>
      <CardContent className="space-y-2 p-4">
        <div className="">
          <div className="text-xs text-gray-500 dark:text-gray-400">{description}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">{limit}</div>
          <div className="text-base font-bold text-right">{formattedPrice}</div>
        </div>
        <div><Button>Buy</Button></div>
      </CardContent>
    </Card>
    </Link>
  );
};

export default EventCard;
