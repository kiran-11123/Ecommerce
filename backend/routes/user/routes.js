import express from 'express';
import pkg from '@prisma/client';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import zod from 'zod'

dotenv.config();

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const secret = process.env.SECRET_KEY;

const router = express.Router();



router.post("/signin"  , async(req,res)=>{

    const {email,password} = req.body;

    try{

        const checkemail =await  prisma.user.findUnique({
            where:{
                email :email
            }
        })

        if(!checkemail){
            return res.json({
                message:"Email not found , Please Register"
            })
        }

        const checkpassword = await bcrypt.compare(password, checkemail.password );

        if(!checkpassword){
            return res.json({
                message:"Password is Wrong ! Try again"
            })
        }

        const tokendetails ={ userId : checkemail.id ,"username" : checkemail.username , "email":checkemail.email}

        const token  = jwt.sign(tokendetails ,secret ,{expiresIn :"1h"})

        res.cookie("token", token, {
          httpOnly: true,
        secure: false, 
          maxAge: 3600000 
        });

        return res.json({
            message:"Login Successfull",
            token:token
        })

    }
    catch(er){
        return res.json({
            message:er
        })
    }

})




const signupSchema = zod.object({
    email:zod.string().email(),
    username:zod.string().min(3),
    firstname:zod.string().min(1),
    lastname:zod.string().min(3),
    password:zod.string().min(6,"Password must be at least 6 characters")

})



router.post("/signup" ,async(req,res)=>{
      

    try{

        const parsedData = signupSchema.parse(req.body);

        const {email ,username,firstname,lastname,password } = parsedData;

        const Emailcheck = await prisma.user.findUnique({
            where:{
                email:email
            }
        })

       
        if(Emailcheck){
            return res.status(200).json({
                message:"Email already registered ! Please login"
            })
        }

         const username_check = await prisma.user.findUnique({
            where:{
                username:username
            }
        })
         
        if(username_check){
            return res.status(200).json({
                message:"Username already taken "
            })
        }

        const password_hash = await bcrypt.hash(password,10);

        

        const  user = await prisma.user.create({
            data:{
                email:email,
                username:username,
                firstname:firstname,
                lastname:lastname,
                password:password_hash
            }
        })

        return res.status(201).json({
            message:"User Registered Successfully !!"
        })

    }
    catch(er){

        if(er instanceof zod.ZodError){
            return res.status(400).json({
                message:"Validation failed",
                errors:er.errors
            })
        }
        return res.json({
            message:"Internal Server Error",
            errors:er.errors
        })
    }
})

export default router;






