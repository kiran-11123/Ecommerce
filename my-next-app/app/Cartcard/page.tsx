"use client"


 interface Cartcard{
         productId :string;
         productImage:string;
         productName:string;
         quantity:number;
         price:number;
    }



export default function Cartcard({productId ,productImage,productName,quantity , price} : Cartcard){

    

    const image_url = `http://localhost:3000/uploads/${productImage}`;

    return(


        <div className="flex flex-col  items-center w-60 sm:max-w-sm bg-gray-100 gap-4 shadow-2xl hover:shadow-lg transition-all duration-300 border-gray-200 group p-4 rounded-2xl">
              
              <div className="h-32 w-40 bg-gray-500 rounded-md transform">

                <img src={image_url}   alt="image" className="w-full h-full object-cover rounded group-hover:scale-105 transition duration-300" />

              </div>
              <div className="text-center font-bold flex items-center justify-between text-md">
                  
                  <p>{productName}</p>
                  <p>{quantity}</p>

              </div>

              <div className="text-center font-bold flex items-center justify-between text-md">
                <p>{price}</p>
              </div>

        </div>





         
    )
     
}