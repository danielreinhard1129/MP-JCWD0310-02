import prisma from "@/prisma";
import { User } from "@prisma/client";

export const organizerRegisterService = async (body : User) => {
    try {
        
        const { firstName , lastName , email , password } = body;

        const isExistUser = await prisma.user.findFirst({
            where : {
                email,
            }
        });

        if (!isExistUser) {
            throw new Error("email is already registered");
        }

        const user = await prisma.user.create({
            data : {
                ...body,
            }
        })

        return {
            message : "success register account with organizer role",
            data : user
        }

    } catch (error) {
        throw error;
    }
};