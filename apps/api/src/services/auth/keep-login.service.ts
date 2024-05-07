import prisma from "@/prisma";

export const keepLoginService = async (id : number) => {
    try {

        const user = await prisma.user.findFirst({
            where : { id },
        });

        if (!user) throw new Error("User is Invalid");

        return {
            message : "testing",
            data : user,
        }
    } catch (err) {
        throw err;
    }
}