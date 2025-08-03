import express from 'express'
import mongoose from 'mongoose'
import Cart from '../../mongodb/cart';
const cartRouter = express.Router();
import Authenticate_token from '../../middleware/jwtmiddleware';



cartRouter.post("/add" ,Authenticate_token ,  async(req,res)=>{

    try{

        const user_id = req.user.user_id;

        const {product_id , image,name,count,price} = req.body;

        const totalprice = count*price;

        const userFind  = await Cart.findOne({userId:user_id})

        if(userFind){
              
            userFind.items.add({product_id,image,name,count ,totalprice});

            return res.json({
                message:"Successfully added to cart"
            })
        }

        else{

            
             
        }

    }
    catch(er){
        return res.json({
            message:"Server Error",
            error:er
        })
    }


      

})












export default cartRouter ;