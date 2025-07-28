import express from 'express';
import mongoose from 'mongoose';
const app = express();
app.use(express.json());
const Product_router = express.Router();
import Products_main from '../../mongodb/admin.js';
import { file } from 'zod';


Product_router.get("/allproducts" , async(req,res)=>{

    try{

        const data = await Products_main.find();

        if(data.length===0){
            return res.status(200).json({
                message:"Products List is Empty",
                
            })
        }

        return res.json({
            products : data
        })



    }
    catch(er){
        return res.status(500).json({
            message: "Internal Server Error",
            error : er 
        })
    }
      

})

Product_router.get("/products",async(req,res)=>{

    const query = req.query;
      
    try{

        const filter={};

        if(query){
           filter.category = query;
        }

        const data = await Products_main.find(filter);

        if(!data || data.length===0){

            return res.status(400).json({
                message:"No data for this category",
                products :[]
            })

        }

        return res.status(200).json({
            message:"Products found",
            products : data
        })



    }
    catch(er){
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
})

export default Product_router;