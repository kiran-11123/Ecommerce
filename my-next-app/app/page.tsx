"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  function TosinginPage(){
    router.push("/signin")
  }

  function TosignupPage(){
    router.push("/signup")
  }
  return (

    <div className="flex flex-col  min-h-screen  bg-gray-50">

      <header className="flex  justify-between items-center px-8 py-4 shadow bg-white rounded-sm">

        <h1 className="text-2xl  text-blue-500 font-bold rounded-xl sm:text-3xl   ">Shopsify</h1>

        <div className="flex gap-4">

          <button onClick={TosinginPage} className="  px-2 py-1 sm:px-4  sm:py-2 text-white bg-blue-500 font-bold rounded-xl shadow-2xl cursor-pointer">
            Login

          </button>

       

          <button onClick={TosignupPage} className="px-2 py-1 sm:px-4  sm:py-2 text-white bg-blue-500 font-bold rounded-xl shadow-2xl cursor-pointer">

               Signup

          </button>

        </div>

        

      </header>

     
     <main className="flex flex-col items-center justify-center  flex-grow text-center px-4 py-8  shadow-2xl">

      <h2 className="font-extrabold text-gray-700 text-2xl sm:text-4xl  mb-4">
         Welcome to Shopsify
      </h2>

     <p className="text-gray-600 text-base sm:text-lg max-w-xl">
    Manage your online store with ease. Add products, track orders, and grow your business.
      </p>
          

     </main>


     <footer className="text-sm bg-gray-800 text-white sm:text-2xl  text-center px-6 py-4">

      <p>&copy; {new Date().getFullYear()} Shopsify. All rights reserved.</p>

     </footer>


     



    </div>

    
    
  );
}
