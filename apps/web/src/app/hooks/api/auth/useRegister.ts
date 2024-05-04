import { User } from "@/app/types/user.type";
import { NEXT_PUBLIC_BASE_API_URL } from "@/app/utils/config";
import axios from "axios";

export const useRegister = async ( user : Pick<User , "email" | "password" | "userName"> ) => {
    try {
        const { email , password , userName } = user;

        const result = await axios.post(NEXT_PUBLIC_BASE_API_URL + "/auth/register" , {
            email,
            password,
            userName,
        });
        
        return result

    } catch (err) {
        throw err;
    }
};