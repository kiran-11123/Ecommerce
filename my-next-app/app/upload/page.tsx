"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";

export default function Upload(){

    const[file,setImage] = useState<File | null>(null);
   const [Name, setName] = useState<string>("")
    const[Price,setPrice] = useState<number>(0);
    const[Category,setCategory]=useState<string>('');
    const[message,setMessage] =useState('');


    const router=useRouter();

    function ImageSetting(e:any){
        if(e.target.files && e.target.files.length>0 ){
            setImage(e.target.files[0]);
        }
    }

    async function uploadImages(e:any){
        e.preventDefault();

        try{
        
        if(!file){
            window.alert("Please select the file");
            return;
        }

        const formData =new FormData();
        if(file){
            formData.append("file",file);
        }
        if(Name){
             formData.append("product_name",Name);

        }
        if(Price){
            formData.append("price",Price.toString());
        }
        if(Category){
            formData.append("category",Category);
        }
       


        
        const response = await axios.post("http://localhost:3000/api/admin/upload",formData);

        if(response.data.message){
            
            setMessage(response.data.message);

            setTimeout(()=>{
                setMessage('');

            },3000);

        }
        else{
            setMessage(response.data.message);
            console.log(response.data.error);
            
        }

    }
    catch(er){
          
        console.log(er);
        
    }



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
                        onChange={ImageSetting}
                    />
                    </div>

              <div>
                    <label className="block mb-1 text-gray-700 font-medium">Product Name</label>
                    <input 
                        type="text" 
                      
                        placeholder="Enter Product Name"  
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={(e)=>setName(e.target.value)}
                    />
                    </div>
                   <div>
                    <label className="block mb-1 text-gray-700 font-medium">Product Price</label>
                    <input 
                        type="text" 
                        onChange={(e)=>setPrice(Number(e.target.value))}
                      
                        placeholder="Enter Product Price"  
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    </div>
                    <div>
                    <label className="block mb-1 text-gray-700 font-medium">Product Category</label>
                    <input 
                        type="text" 
                        onChange={(e)=>setCategory(e.target.value)}
                      
                        placeholder="Enter Product category"  
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    </div>
                    
                    <button type="submit" className="w-full text-center font-bold bg-green-400 text-white px-3 py-2 rounded-md">Upload</button>

                    {message && <p  className="text-center mt-2 text-red-400 ">{message} </p> }

            </form>

             </div>

             

            
        </div>
    )
}