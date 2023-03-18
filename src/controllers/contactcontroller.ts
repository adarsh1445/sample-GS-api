import { Response, Request, NextFunction } from "express";
import {
    newcontactData
  } from "../services/contactservices";

 export interface Icontact {
    name : string,
    email : string,
    phoneNumber : number,
    message : string
  }

  export const newcontact = async (req: Request, res: Response, next: NextFunction) => {
   
    const contact: Icontact = req.body;
    await newcontactData(contact);
  
    return res.send({ message: "successful" });
  };


