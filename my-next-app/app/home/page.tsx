"use client";
import {ShoppingCart ,MapPin ,Search} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Card from '../card/page';

import { useAdminStore } from '../store/useAdminStore';
import { useEffect } from 'react';
import axios from 'axios';

import { useSearchParams } from "next/navigation";


export default function Home() {

    const [search, setSearch] = useState("");

      useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get("search") || "";
    setSearch(searchQuery);
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getAllData() {
      try {
        let response;

        if (search.length > 0) {
            response = await axios.get(`http://localhost:3000/api/products/category?search=${encodeURIComponent(search)}`, {
            withCredentials: true,
          });

          
        } else {
            response = await axios.get("http://localhost:3000/api/products/allproducts", {
            withCredentials: true,
          });
        }

        if (response.data.products) {
          setData(response.data.products);
          console.log(data);
        } else {
          window.alert("No products found");
        }
      } catch (er) {
        console.log("Error fetching data:", er);
      }
    }

    getAllData();
  }, [search]);
        
    
    
   

    interface CardInterface{
   _id: string;
   product_id:string;
   product_image:string;
   product_name:string;
   product_price:number;
}

    return(
 
        <div className="flex flex-col min-h-screen items-center  ">

            

            

          {Array.isArray(data) && data.length>0 &&  <div className="h-[80vh] overflow-y-auto">
                <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 gap-4 mt-10">
                    {data.map((card: CardInterface, index: number) => (
                    <Card
                        key={index}
                        product_id = {card._id}
                        image={card.product_image}
                        name={card.product_name}
                        price={card.product_price}
                    />
                    ))}
                </div>
                </div> }


          
            
        </div>
    )
}