"use client"


import axios from "axios";
import { useEffect } from "react"
import { useState } from "react";
import Cartcard from "../Cartcard/page";

export default function Cart(){

    const[cartData , setCartData] = useState([]);
    const[cartUpdated , setCartUpdated] = useState(false);


    useEffect(()=>{

      

        async function getCartData(){

            try{

            const response =await  axios.get("http://localhost:3000/api/products/cart/data",{
                withCredentials:true
            })

            if(response.data.cartData.length > 0 ){

                setCartData(response.data.cartData);
                 
            }
            else{
                setCartData([]);
            }

        }
         
        catch(er){
             console.log("Error Fetching the Data", er);
        }
        }

   

    getCartData();

    },[cartUpdated])


    interface CartInterface{
         productId :string;
         productImage:string;
         productName:string;
         quantity:Number;
         price:Number;
    }
    return(
        <div className="p-5 flex items-center justify-between bg-white">

            <div className="flex items-center justify-center px-5 py-3 ">



                {cartData.length > 0 && <div className="h-[80vh] overflow-y-auto">
                <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-4 mt-10">
                     {cartData.map((card: CartInterface, index: number) => (
                                        <Cartcard
                                            key={index}
                                            productId= {card.productId}
                                            productImage={card.productImage}
                                            productName={card.productName}
                                            quantity = {card.quantity}
                                            price={card.price}
                                        />
                     ))}



                    </div>
                </div>
                    
                    }
               
            </div>
            
        </div>
    )
}