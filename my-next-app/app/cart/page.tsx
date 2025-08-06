"use client"


import axios from "axios";
import { useEffect } from "react"
import { useState } from "react";
import Cartcard from "../Cartcard/page";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cartcount } from "../store/useAdminStore";
import { useRouter } from "next/navigation";




export default function Cart(){

    const[cartData , setCartData] = useState<CartInterface[]>([]);
    const router = useRouter();
  
   






    


    useEffect(()=>{

      

        async function getCartData(){

            try{

            const response =await  axios.get("http://localhost:3000/api/products/cart/data",{
                withCredentials:true
            })

            if(response.data.cartData ){

                setCartData(response.data.cartData);

                console.log(cartData);
                 
            }
            else{
                setCartData([]);
                console.log(cartData)
            }

        }
         
        catch(er){
             console.log("Error Fetching the Data", er);
        }
        }

   

    getCartData();

    },[])


   async function  ToCheckout(){
           
             router.push("/checkout");
   }
    




const [cartPrice, setCartPrice] = useState(0);
const[cartQuantity , setCartQuantity] = useState(0);

useEffect(() => {
  const totalPrice = cartData.reduce((sum, cart) => sum + cart.price, 0);
  const totalQuantity = cartData.reduce((sum, cart) => sum + cart.quantity, 0);

  setCartPrice(totalPrice);
  setCartQuantity(totalQuantity);
  cartcount.getState().increment(totalQuantity);

}, [cartData]);



    interface CartInterface{
         productId :string;
         productImage:string;
         productName:string;
         quantity:number;
         price:number;
         _id:string;
    }
    return(
        <div className="p-5  bg-white">

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
                                            id={card._id}
                                        />

                                       
                                        
                     ))}



                    </div>
                </div>
                    
                    }
               
            </div>

            <div className="w-full px-5 py-2 bg-red-200 h-20  flex items-center justify-between font-bold">

                <div>Total Items with Quantity : {cartQuantity} </div>

                <div>Total Amount : {cartPrice}</div>


                <button className="px-4 py-2 bg-gray-200 font-bold rounded  shadow-2xs"  onClick={ToCheckout}>checkout </button>





            </div>

            
            
        </div>


    )
}