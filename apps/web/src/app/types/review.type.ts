import { Event } from "./event.type";
import { User } from "./user.type";

export interface Review {
    id: number;
    userId: number;
    eventId: number;
    rating: number;
    review: string;
    createdAt: Date;

    user: User;
    event: Event;
}

export interface IFormCreateReview {
    rating: string;
    review: string;
    createdAt: String;
    eventId?: string;
}