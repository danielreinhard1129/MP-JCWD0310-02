import { AuthController } from "@/controllers/auth.controller";
import { verifyToken } from "@/utils/jwt";
import { Router } from "express";

export class AuthRouter {
    private router : Router;
    private authController : AuthController;

    constructor () {
        this.router = Router();
        this.authController = new AuthController();
        this.initializeRoutes();
    }

    private initializeRoutes():void {
        this.router.get("/" , (req , res , next)=>{
            res.send({message :"oke"}).status(200);
        });
        this.router.post('/login' , this.authController.loginController);
        this.router.post('/register' , this.authController.registerController);
        this.router.post('/register-organizer' , this.authController.registerOrganizerController);
        this.router.post('/keep-login' , verifyToken , this.authController.keepLoginController );
        // this.router.post('/forgot-password' , verifyToken );
    }

    getRouter () : Router {
        return this.router;
    }
}