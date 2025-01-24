import { StatusCodes } from "http-status-codes";
import {loginUserService, userFirtstService} from "../services/user.service.js"
export const firstController=async(req,re)=>
{ const data=await userFirtstService();
res.status(StatusCodes.OK).json({message:'first controller'})
}
  
   export const userLoginController=async(req,res)=>
   {
    console.log(req);
    const data =await loginUserService(req.body);
    res.status(StatusCodes.ACCEPTED).json(data);

    
   }