import { format, parse, parseISO } from 'date-fns';
import { Calendar, LocateIcon } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

interface ListEventCardProps {
  title: string;
  startDate: Date;
  endDate: Date;
  thumbnail: string;
  location: string;
  clickUrl: string;
  time: Date;
}

const ListEventCard = ({
  title,
  startDate,
  endDate,
  clickUrl,
  time,
  location,
  thumbnail,
}: ListEventCardProps) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push("/organizer-dashboard/event/manage-event/"+clickUrl);
  };

  const stringStartDate = format(startDate, 'yyyy.MM.dd');
  const stringEndDate = format(endDate, 'yyyy.MM.dd');

  return (
    <div
      onClick={handleOnClick}
      className="rounded-xl w-full h-44 flex flex-row items-center hover:cursor-pointer justify-between p-4 bg-indigo-950"
    >
      <div className="h-full p-2">
        <Image
          src={'/eventDwp.jpg'}
          alt="Event Images"
          width={100}
          height={100}
          className="w-full h-full rounded-xl border border-[#ffff00]"
        />
      </div>

      <div className="text-[#ffff00] flex flex-col gap-2">
        <div className="font-extrabold text-xl">
          <p>{title}</p>
        </div>

        <div className="flex flex-row gap-2 items-center font-medium text-sm">
          <Calendar />
          <p>
            {stringStartDate} - {stringEndDate}
          </p>
        </div>

        <div className="flex flex-row gap-2 items-center font-medium text-sm">
          <LocateIcon />
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default ListEventCard;
