import {Router} from "express"
import {StatusCodes} from "http-status-codes"
const userRouter=Router();

userRouter.get("/",(req,res)=>
{res.status(StatusCodes.ok).json({message:"from users"})
})
export default userRouter;