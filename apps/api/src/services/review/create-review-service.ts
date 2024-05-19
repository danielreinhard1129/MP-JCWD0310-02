import prisma from "@/prisma";
import { Review } from "@prisma/client";

interface CreateReviewBody extends Omit <Review, 'id' | "updatedAt"> {}

export const createReviewService = async (body: any) => {
    try {
        const {eventId, userId, rating, review, createdAt} = body
        const user = await prisma.user.findFirst({
            where: {id: 1}
        });

        if(!user) {
            throw new Error('user not found');
        }

        const newReview = await prisma.review.create({
            data: {
                userId: 1,
                eventId: Number(eventId),
                rating: Number(rating),
                review: String(review),
                createdAt: new Date(),
            }
        })
        return {
            data : newReview
        }
    } catch (error) {
        throw error;
    }
}