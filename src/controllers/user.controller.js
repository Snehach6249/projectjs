import { statusCodes } from "http-status-codes";
import {userFirtstService} from "../services/user.service.js"
export const firstController=async(req,re)=>
{const data=await userFirtstService();
res.status(statusCodes.OK).json({message:data})
}
  
   