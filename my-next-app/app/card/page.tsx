"use client"

interface CardInterface{
   product_id :string,
   image:string;
   name:string;
   price:number;
}




import { ShoppingCart } from "lucide-react"
import { useState } from "react";
import axios from "axios";

export default function Card({product_id ,image,name,price}:CardInterface){



  const[counter,setCount] = useState(1);


  function Increment(){
       
    setCount(counter+1);
  
  }

  function Decrement(){
      
    if(counter>1){
       setCount(counter-1)
      
    }
  }

  async function AddtoCartFunction() {

    console.log(product_id, image, name, counter, price);

    const response   = await axios.post("http://localhost:3000/api/products/cart/add",{

      product_id,
      image,
      name,
      counter : Number(counter),
      price:Number(price)

    },{withCredentials:true})

    if(response.data.message){ 
        
       window.alert(response.data.message);
       setCount(1);
       
    }
    else{
        
      window.alert(response.data.message);
    }
    
  }

 



  const imageUrl = `http://localhost:3000/uploads/${image}`;

    return(
        <div className="flex flex-col items-center w-60  sm:max-w-sm bg-gray-200  gap-4  shadow-xl hover:shadow-lg transition-all duration-300 border-gray-200 group p-4 rounded-2xl">
            
            <div className="h-32 w-40 bg-gray-500 rounded-md transform  ">
                
                <img src={imageUrl}   alt="image" className="w-full h-full object-cover rounded group-hover:scale-105 transition duration-300" />
            </div>

            <div className="w-full  text-center  px-4 py-2  border-transparent hover:border rounded hover:border-black hover:scale-90 hover:transform border">
               <p className="text-lg truncate text-gray-800 font-sans font-bold ">{name} </p> 
                <p className="text-md  text-gray-900 mt-1 ">₹ {price}</p>
            </div>

            <div className="flex items-center justify-between w-full">
                <p className="font-bold ">Quantity</p>
              <button className="px-1 bg-red-400" onClick={Increment}>+</button> 
              <button className="px-2 bg-green-300" onClick={Decrement}>-</button>
              <p>{counter}</p>
            </div>
            
             <div className="px-4 pb-4">
        <button
          type="button"
          onClick={AddtoCartFunction}

         
          
          className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
            
        </div>
    )
}