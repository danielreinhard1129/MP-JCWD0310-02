import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';

interface EventCardProps {
  title: string;
  description: string;
  price: string;
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
  return (
    <Link href={`/${eventId}`}>
      <Card>
        <CardHeader>
          <div className="relative h-[220px] w-full overflow-hidden rounded-md">
            <Image
              src={imageUrl}
              alt="thumbnail"
              className="object-cover"
              fill
            />
          </div>
        </CardHeader>
        <CardContent>
          <Badge variant="outline" className="rounded-sm bg-green-100">
            {category}
          </Badge>
          <h2 className="line-clamp-2 text-lg font-semibold">{title}</h2>
          <p className="line-clamp-3">{description}</p>
          <p className="text-sm font-light italic">
            {format(startDate, 'dd MMMM yyyy')} -{' '}
            {format(endDate, 'dd MMMM yyyy')}
          </p>
          <p className="text-sm font-light italic">{time}</p>
          <p className="text-sm font-light italic">{price}</p>
          <p className="text-sm font-light italic">{booked}</p>
          <p className="text-sm font-light italic">{limit}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EventCard;
