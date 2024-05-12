import { User } from './user.type';

export interface Event {
  // id: number;
  title: string;
  description: string;
  price: number;
  limit: number;
  booked: number;
  thumbnail: string;
  startDate: Date;
  endDate: Date;
  userId: number;
  category : string;
  createdAt: Date;
  updatedAt: Date;

  // user: User;
}

export interface IFormCreateEvent {
  title: string;
  description: string;
  price: string;
  limit: string;
  booked: string;
  thumbnail: File[];
  startDate: string;
  endDate: string;
  time: string;
  address: string;
  city : string;
  province: string
  country : string;
  category : string;
  isFree: string;
  userId?: string;
}
