"use client"

import axios from "axios";



 interface Cartcard{
    key:number;
         productId :string;
         productImage:string;
         productName:string;
         quantity:number;
         price:number;
         id:string;
    }

      async function RemovefromCart(id:string) {


        const response = await axios.delete(`http://localhost:3000/api/products/cart/delete?id=${id}` ,
          {
         withCredentials:true
        })

        if(response.data.message){ 
          window.alert(response.data.message);
        }

    }



export default function Cartcard({ productId ,productImage,productName,quantity , price,id} : Cartcard){
     


  
    

    const image_url = `http://localhost:3000/uploads/${productImage}`;

    return(


        <div className="flex flex-col  items-center w-60 sm:max-w-sm bg-gray-100 gap-4 shadow-2xl hover:shadow-lg transition-all duration-300 border-gray-200 group p-4 rounded-2xl">
              
              <div className="h-32 w-40 bg-gray-500 rounded-md transform">

                <img src={image_url}   alt="image" className="w-full h-full object-cover rounded group-hover:scale-105 transition duration-300" />

              </div>
              <div className="text-center font-bold flex items-center justify-evenly text-md">
                  
                  <div>{productName}</div>

              </div>

              <div>
                  <p>Quantity : {quantity} </p>
              </div>

              <div className="text-center font-bold flex items-center justify-between text-md">
                
                <p>Total : {price}</p>
              </div>

              <div>
                <button className="px-5 py-3 bg-blue-400 rounded-2xl" onClick={()=>RemovefromCart(id)}>Remove</button>
              </div>

        </div>





         
    )
     
}