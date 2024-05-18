import { User } from './user.type';

interface Location {
  id: number;
  address : string;
  city: string;
  country: string;
  province: string;
}

interface Category {
  id : number;
  title : string;
  description : string;
  isDeleted : boolean;
  createdAt : Date;
  updatedAt :Date;
}

interface EventCategory {
  id : number;
  createdAt : Date;
  updatedAt : Date;
  categoryId : number;
  eventId : number;
  category : Category;
}

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
  time: string;
  eventCategory : EventCategory[];
  userId: number;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  location: Location;

  // user: User;
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
  time: string;
  address: string;
  city: string;
  province: string;
  country: string;
  category: string;
  isFree: boolean;
  userId?: number;
}
