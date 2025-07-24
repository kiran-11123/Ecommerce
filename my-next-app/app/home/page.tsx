"use client"


export default function Home(){

    return(

        <div className="flex flex-col min-h-screen items-center ">

            <header className="flex justify-between items-center gap-4  bg-gray-500 w-full px-4 py-3">
               <div className="w-10 sm:w-30 h-auto bg-white rounded-md shadow-md ">
                   <img alt="logo" src="/logo3.jpg" className="w-full rounded-mg hidden sm:block" />
                   <img alt="logo" src="/logo2.jpg" className="w-10 rounded-mg block sm:hidden" />
              </div>


                <div className="w-40 sm:w-60 px-4 py-2 bg-white rounded-xl shadow-md">
                 <input
                placeholder="Search here..."
                className="w-full h-full px-3 py-2 rounded-md outline-none text-sm font-bold hidden sm:block" 
                />

                <input placeholder="Search here..." className="w-full h-full px-3 py-2 rounded-md outline-none text-sm font-bold block sm:hidden"/>
                
               
               </div>

               <div className=" hidden sm:block">

                Address

               </div>

               <div className="w-20 sm:w-30 px-4 py-2 ">
                 
                 cart

               </div>




            </header>
            
        </div>
    )
}