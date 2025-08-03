import express from 'express'
import mongoose from 'mongoose'
import Cart from '../../mongodb/cart.js';
const cartRouter = express.Router();
import Authenticate_token from '../../middleware/jwtmiddleware.js';



cartRouter.post("/add" ,Authenticate_token ,  async(req,res)=>{

    try{

        const user_id = req.user.userId;

        const {product_id , image,name,count,price} = req.body;

        console.log(product_id , image,name,count,price);

        const totalprice = count*price;

        const userFind  = await Cart.findOne({userId:user_id})

        if(userFind){
              
            userFind.items.push({productId : product_id ,productImage:image,productName:name,quantity:count ,price:totalprice});
            await userFind.save();

            return res.json({
                message:"Successfully added to cart"
            })
        }

        else{

            const newCart = new Cart({
                userId:user_id,
                items :[{productId : product_id ,productImage:image,productName:name,quantity:count ,price:totalprice}]


            })

            await newCart.save();

            return res.json({
                message:"Cart created and added the items"
            })


             
        }

    }
    catch(er){
        console.error(er);
        return res.json({
            message:er,
           error:er
        })
    }


      

})












export default cartRouter ;