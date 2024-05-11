import { User } from './user.type';

export interface Event {
  id: number;
  title: string;
  description: string;
  price: number;
  limit: number;
  booked: number;
  thumbnail: string;
  startDate: Date;
  endDate: Date;
  userId: number;
  createdAt: Date;
  updatedAt: Date;

  user: User;
}

export interface IFormCreateEvent {
  title: string;
  description: string;
  price: number;
  limit: number;
  booked: number;
  thumbnail: File[];
  startDate: Date;
  endDate: Date;
  userId?: number;
}
