import express from 'express';
const AdminRouter = express.Router();
import multer from 'multer';
import mongoose from 'mongoose';
import Products_main from '../../mongodb/admin.js';
import path from 'path'


const storage =multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, "uploads");

    },
    filename:function(req,file,cb){
        const uniqueSuffix = Date.now();
        cb(null,file.fieldname+'-'+uniqueSuffix+path.extname(file.originalname));
    }
})

const upload = multer({storage:storage});


AdminRouter.post("/upload",upload.single('file'), async(req,res)=>{

    try{

        const {product_name , price , category} = req.body;
        const file=req.file;

        if(!file){
            return res.json({message:"Image is Required"});
        }

        const newEntry =  new Products_main({
            product_image:file.filename,
            product_name:product_name,
            product_price:price,
            category:category
        })
        await newEntry.save();

        return res.status(200).json({
            message:"Image Uploaded Successfully"
        })

    }
    catch(er){
         
        return res.status(500).json({
            message:"Server Error",
            error:er
            
        })
    }


})










export default AdminRouter ;