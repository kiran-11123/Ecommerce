"use client";
import {ShoppingCart ,MapPin ,Search} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Card from '../card/page';

import { useAdminStore } from '../store/useAdminStore';




export default function Home(){


    
    const[data,setData] = useState([]);

   

    interface CardInterface{
   image:string;
   name:string;
   price:number;
}

    return(

        <div className="flex flex-col min-h-screen items-center ">

            

            <div className="h-[80vh] overflow-y-auto">
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                    {data.map((card: CardInterface, index: number) => (
                    <Card
                        key={index}
                        image={card.image}
                        name={card.name}
                        price={card.price}
                    />
                    ))}
                </div>
                </div>


          
            
        </div>
    )
}