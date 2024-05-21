import { User } from './user.type';

export interface Location {
  id: number;
  address: string;
  city: string;
  country: string;
  province: string;
}

export interface Category {
  id: number;
  title: string;
  description: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Transaction {
  id: number;
  uuid: string;
  status: string;
  qty: number;
  paymentProof: string | null;
  total: number;
  pointUsed: number;
  createdAt: string;
  updatedAt: string;
  eventId: number;
  userId: number;
}

export interface TransactionUserReward {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  userRewardId: number;
  transactionId: number;
  userReward : UserReward; 
}

export interface UserReward {
  id: number;
  isUsed: true;
  createdAt: Date;
  updateAt: Date;
  rewardId: number;
  userId: number;
  reward: Reward;
}

export interface Reward {
  id: number;
  title: number;
  description: number;
  percentage: number;
  max_nominal: number;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updateAt: Date;
}

export interface EventCategory {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  categoryId: number;
  eventId: number;
  category: Category;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  price: number;
  limit: number;
  booked: number;
  thumbnail: string;
  startDate: string;
  endDate: string;
  isFree: boolean;
  time: string;
  eventCategory: EventCategory[];
  userId: number;
  category: string;
  transaction: Transaction[];
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
