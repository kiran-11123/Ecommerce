"use client";
import {ShoppingCart ,MapPin ,Search} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Card from '../card/page';

import { useAdminStore } from '../store/useAdminStore';
import { useEffect } from 'react';
import axios from 'axios';




export default function Home(){


    
    const[data,setData] = useState([]);

   

        useEffect(()=>{

            async function getallData(){

                try{
                 const response = await axios.get("http://localhost:3000/api/products/allproducts",{
                    withCredentials: true});

                 if(response.data.products){
                     setData(response.data.products);
                     console.log(data);
                 }

            }

            catch(er){
                console.log(er);
            
        }
        }

        

            getallData();

           

        },[])
        
    

   

    interface CardInterface{
   image:string;
   name:string;
   price:number;
}

    return(

        <div className="flex flex-col min-h-screen items-center ">

            

          {Array.isArray(data) && data.length>0 &&  <div className="h-[80vh] overflow-y-auto">
                <div className="grid grid-cols-1 items-center justify-center sm:grid-cols-5 gap-4">
                    {data.map((card: CardInterface, index: number) => (
                    <Card
                        key={index}
                        image={card.image}
                        name={card.name}
                        price={card.price}
                    />
                    ))}
                </div>
                </div> }


          
            
        </div>
    )
}