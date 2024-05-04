import { User } from "@/app/types/user.type";
import axios from "axios";

const useLogin = ( body :Pick<User,"password" | "userName" > ) => {
    const { password , userName } = body;
    
};

export default useLogin;