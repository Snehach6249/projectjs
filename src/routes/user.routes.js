import {Router} from "express"
import {StatusCodes} from "http-status-codes"
import { firstController, userLoginController } from "../controllers/user.controller.js";
const userRouter=Router();
userRouter.get('/',firstController)
userRouter.post('/login',userLoginController)
userRouter.get("/abouts",(req,res)=>
{res.send('about birds')
})
export default userRouter;