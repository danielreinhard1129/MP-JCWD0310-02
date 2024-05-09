import prisma from "@/prisma";

export const getUserDetailService = async(userId : number) => {
    try {
        
        const userDetail = await prisma.user.findFirst({
            where: {
                id:userId
            }
        })

        return userDetail

    } catch (err) {
        throw err;
    }
}