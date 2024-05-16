import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader } from './ui/card';

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
    currency: 'IDR'
  }).format(price);

  return (
    <Link href={`/${eventId}`}>
      <Card>
        <CardHeader>
          <div className="relative h-[100px] w-full overflow-hidden rounded-md">
            <Image
              src={imageUrl}
              alt="thumbnail"
              className="object-cover"
              fill
            />
          </div>
        </CardHeader>
        <CardContent>
          {/* <Badge variant="outline" className="rounded-sm bg-green-100">
            {title}
          </Badge> */}
          <h2 className="line-clamp-2 text-lg font-semibold text-center">{title}</h2>
          <h2 className="line-clamp-2 text-lg font-semibold">{category}</h2>
          <p className="line-clamp-3">{description}</p>
          <p className="text-sm font-light italic">
            {`Date: ${format(startDate, 'dd MMMM yyyy')} - ${format(endDate, 'dd MMMM yyyy')}`}
          </p>
          <p className="text-sm font-light italic">{time}</p>
          <p className="text-sm font-light italic">{`Price: ${formattedPrice}`}</p>
          <p className="text-sm font-light italic">{booked}</p>
          <p className="text-sm font-light italic">{limit}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EventCard;
