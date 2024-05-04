import { AuthController } from "@/controllers/auth.controller";
import { loginService } from "@/services/auth/login.service";
import { registerService } from "@/services/auth/register.service";
import { verifyToken } from "@/utils/jwt";
import { Router } from "express";

export class AuthRouter {
    private router : Router;
    private authController : AuthController;

    constructor () {
        this.router = Router();
        this.authController = new AuthController();
    }

    private initializeRoutes():void {
        this.router.post('/login' , loginService);
        this.router.post('/register' , registerService);
        // this.router.post('/keep-login' , verifyToken );
        // this.router.post('/forgot-password' , verifyToken );
    }

    getRouter () : Router {
        return this.router;
    }
}