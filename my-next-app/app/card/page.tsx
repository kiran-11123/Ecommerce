"use client"

interface CardInterface{
   image:string;
   name:string;
   price:number;
}

import { ShoppingCart } from "lucide-react"
export default function Card({image,name,price}:CardInterface){



  const imageUrl = `http://localhost:3000/uploads/${image}`;

    return(
        <div className="flex flex-col items-center w-60  sm:max-w-sm bg-gray-200  gap-4  shadow-xl hover:shadow-lg transition-all duration-300 border-gray-200 group p-4 rounded-2xl">
            
            <div className="h-32 w-40 bg-gray-500 rounded-md transform  ">
                
                <img src={imageUrl}   alt="image" className="w-full h-full object-cover rounded group-hover:scale-105 transition duration-300" />
            </div>

            <div className="w-full  text-center  px-4 py-2 border border-transparent hover:border rounded hover:border-black hover:scale-90 hover:transform border">
               <p className="text-lg truncate text-gray-800 font-sans font-bold ">{name} </p> 
                <p className="text-md  text-gray-900 mt-1 ">₹ {price}</p>
            </div>
            
             <div className="px-4 pb-4">
        <button
          type="button"
          
          className="w-full flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
            
        </div>
    )
}