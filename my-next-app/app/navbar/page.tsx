"use client"
import {ShoppingCart ,MapPin ,Search} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Card from '../card/page';

import { useAdminStore } from '../store/useAdminStore';

export default function Navbar(){

     
    const isAdmin = useAdminStore((state) => state.isAdmin);
    const[data,setData] = useState([]);

    const[Cart,setCart] = useState(0);

    const router =useRouter();

    function ToCartPage(){
        router.push("/cart");
    }

    function SearchSubmit(){
        router.push("/hi")
    }
    function ToUploadData(){
        router.push("/upload")
    }
    function sendLogout(){
        localStorage.removeItem("token");
        useAdminStore.getState().setIsAdmin(false);
        router.replace("/signin");
    }

    interface CardInterface{
   image:string;
   name:string;
   price:number;
}

    return (


        <div>



         <header className="flex justify-between items-center gap-4  bg-gray-500 w-full px-4 py-3 cursor-pointer">
               <div className="w-10 sm:w-30 h-auto py-2 px-2 rounded-md shadow-md  border border-transparent hover:border hover:border-black">
                   <img alt="logo" src="/logo3.jpg" className="w-full rounded-mg hidden sm:block" />
                   <img alt="logo" src="/logo2.jpg" className="w-10 rounded-mg block sm:hidden" />
              </div>

                
                <form onSubmit={SearchSubmit} className='shadow-md'>
                <div className= " flex justify-between w-40 sm:w-60 px-4 py-2 bg-white rounded-xl shadow-md border border-transparent hover:border hover:border-black">
                 <input type="text"
                placeholder="Search here..."
                className="w-full h-full px-2 py-2 rounded-md outline-none text-sm font-bold hidden sm:block " aria-label="Search"
                />

                <button  aria-label="serchButton" type="submit" ><Search height={30}/></button>

                <input type="text"  aria-label="Search" placeholder="Search here..." className="w-full h-full px-4 py-2 rounded-md outline-none text-sm font-bold block sm:hidden"/>
                
               </div>

               </form>

               <div className=" hidden sm:block  border border-transparent hover:border hover:border-black rounded px-2 py-2  shadow-md text-white">

                <p className='text-center font-bold'>Address & Location  </p>
                <div className='items-center justify-center flex'>
                    <MapPin className='text-red-800' />
                </div>

               </div>

               {isAdmin &&

               <div className='border border-transparent hover:border hover:border-black rounded px-2 py-2  shadow-md text-white font-bold'>
                  
                  <button onClick={ToUploadData}>Upload</button>  
               </div>

            }

               <div className='w-20 sm:w-28 px-4 py-2 border border-transparent hover:border-black rounded flex justify-center items-center shadow-md'>
                <button onClick={ToCartPage} className='flex flex-col items-center justify-center' aria-label="Go to cart">

                    <span className='text-sm font-bold '>{Cart}</span>

                    <ShoppingCart width={80} height={30} />
 
                </button>
               </div>

               <div className='w-20 sm:w-28 px-4 py-2 border border-transparent hover:border-black rounded flex justify-center items-center shadow-md'>
                     <button onClick={sendLogout}>Logout</button>
               </div>




            </header>

            </div>
    )
}