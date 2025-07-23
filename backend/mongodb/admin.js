import mongoose from "mongoose";
import { number } from "zod";



const productsSchema = new mongoose.Schema({   
    product_image :{type:String , required:true},
    product_name :{type:String ,required:true},
    product_price :{type:Number ,required:true},
    category :{type:String , required:true}
    

})

const Products_main = mongoose.model("Products_data" , productsSchema);


export default Products_main;