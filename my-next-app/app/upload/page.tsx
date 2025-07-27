"use client"

import { useRouter } from "next/navigation";
export default function Upload(){

    const router=useRouter();

    function uploadImages(e:any){
        e.preventDefault();


    }
      
    return(

        

        <div className="h-screen flex  items-center justify-center bg-gray-300">
            
            <div className="w-full max-w-md bg-white p-6 rounded-md shadow-xl">

           
            <form  className="space-y-4" onSubmit={uploadImages}>
                                <div>
                    <label className="block mb-1 text-gray-700 font-medium">Image</label>
                    <input 
                        type="file" 
                        accept="image/*" 
                        placeholder="Upload Image"  
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    </div>

              <div>
                    <label className="block mb-1 text-gray-700 font-medium">Product Name</label>
                    <input 
                        type="text" 
                      
                        placeholder="Enter Product Name"  
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    </div>
                   <div>
                    <label className="block mb-1 text-gray-700 font-medium">Product Price</label>
                    <input 
                        type="text" 
                      
                        placeholder="Enter Product Price"  
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    </div>
                    <div>
                    <label className="block mb-1 text-gray-700 font-medium">Product Category</label>
                    <input 
                        type="text" 
                      
                        placeholder="Enter Product category"  
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    </div>
                    
                    <button type="submit" className="w-full text-center font-bold bg-green-400 text-white px-3 py-2 rounded-md">Upload</button>

            </form>

             </div>

            
        </div>
    )
}