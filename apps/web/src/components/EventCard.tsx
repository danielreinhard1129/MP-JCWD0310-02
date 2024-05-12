// import { format } from 'date-fns';
// import Image from 'next/image';
// import Link from 'next/link';
// import { FC } from 'react';
// import { Badge } from './ui/badge';
// import {
//   Card,
//   CardContent,
//   CardHeader
// } from './ui/card';

// interface EventCardProps {
//   title: string;
//   description: string;
//   price: string;
//   booked: string;
//   limit: string;
//   imageUrl: string;
//   startDate: Date;
//   endDate: Date;
//   eventId: number;
// }

// const EventCard: FC<EventCardProps> = ({
//   title,
//   description,
//   price,
//   booked,
//   limit,
//   imageUrl,
//   startDate,
//   endDate
//   eventId,
// }) => {
//   return (
//     <Link href={`/${eventId}`}>
//       <Card>
//         <CardHeader>
//           <div className="relative h-[220px] w-full overflow-hidden rounded-md">
//             <Image
//               src={imageUrl}
//               alt="thumbnail"
//               className="object-cover"
//               fill
//             />
//           </div>
//         </CardHeader>
//         <CardContent>
//           <Badge variant="outline" className="rounded-sm bg-green-100">
//             {category}
//           </Badge>
//           <h2 className="line-clamp-2 text-lg font-semibold">{title}</h2>
//           <p className="text-sm font-light italic">
//             {format(createdAt, 'dd MMMM yyyy')} - {author}
//           </p>
//           <p className="line-clamp-3">{description}</p>
//         </CardContent>
//       </Card>
//     </Link>
//   );
// };

// export default EventCard;
