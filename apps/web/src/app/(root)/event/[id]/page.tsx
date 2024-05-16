'use client';

import useGetEvent from '@/app/hooks/api/event/useGetEvent';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { appConfig } from '@/utils/config';
import { format } from 'date-fns';
import { Share2 } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import SkeletonBlogDetail from './components/SkeletonEventDetail';

const EventDetail = ({ params }: { params: { id: string } }) => {
  const { event, isLoading } = useGetEvent(Number(params.id));

  if (isLoading) {
    return (
      <div className="container mx-auto px-4">
        <SkeletonBlogDetail />
      </div>
    );
  }

  if (!event) {
    return notFound();
  }

  return (
    <main className="container mx-auto px-4">
      <section className="mb-4">
        <div className="mb-4 space-y-1.5">
          <Badge variant="outline" className="rounded-sm bg-green-100">
            {event.category}
          </Badge>
          <h1 className="text-4xl font-semibold">{event.title}</h1>
          <div className="flex mb-2 items-center justify-between">
            <p className="text-sm font-light italic">
              {format(new Date(event.startDate), 'dd MMMM yyyy')} -{' '}
            </p>
            <p className="text-sm font-light italic">
              {format(new Date(event.endDate), 'dd MMMM yyyy')} -{' '}
            </p>
            <p className="text-sm font-light italic">
              {format(new Date(event.endDate), 'dd MMMM yyyy')} -{' '}
            </p>
            <p className="text-sm font-light italic"></p>
            <Button variant="outline" size="icon">
              <Share2 size="20px" />
            </Button>
          </div>
        </div>

        <div className="relative h-[400px]">
          <Image
            fill
            src={`${appConfig.baseUrl}/assets${event.thumbnail}`}
            alt="thumbnail image"
            className="object-cover bg-slate-200"
          />
        </div>
      </section>
    </main>
  );
};

export default EventDetail;