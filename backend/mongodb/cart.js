import mongoose  from "mongoose";


const cartSchema = new mongoose.Schema({
    
    userId :{
        type:Number,
        required:true
    },

    items:[

        {

     
      productId: String,
      productImage: String,
      productName:String,
      quantity: Number,
      price: Number
    }

    ]
   


},{timestamps:true})


// this is to add the users products into the cart
const Cart = mongoose.model("Cart" , cartSchema);


export default Cart;