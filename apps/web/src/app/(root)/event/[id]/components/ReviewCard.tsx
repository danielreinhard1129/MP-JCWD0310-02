import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { FC } from 'react';


interface ReviewCardProps {
 review: string,
 rating: string, 
 createdAt: Date,
}

const ReviewCard: FC<ReviewCardProps> = ({
  review, 
  rating,
  createdAt,

}) => {
  return (
      <Card>
        <CardHeader>
         <h1>Reviews</h1>
        </CardHeader>
        <CardContent>
          <h2 className="line-clamp-2 text-lg font-semibold">Review</h2>
          <p className="text-sm font-light italic">
            {review}
          </p>
          <h2 className="line-clamp-2 text-lg font-semibold">Rating</h2>
          <p className="text-sm font-light italic">
            {rating}
          </p>
        </CardContent>
      </Card>
  );
};

export default ReviewCard;
