"use client"
import { useState } from "react";
import axios from "axios";


export default function Address(){

    const[state ,setState]=useState("");
    const[city ,setCity] =useState("");
    const[address,setAddress] = useState("");
    const[pincode , setPincode] = useState("");
    const[message ,setMessage] = useState("");


   


    

async function submitAddress(e: any) {
  e.preventDefault();

  try {

     const res = await axios.get("http://localhost:3000/api/user/check-token", {
  withCredentials: true
});
console.log(res.data.token); // should print the token
    const response = await axios.post(
      "http://localhost:3000/api/user/address",
      {
        state,
        city,
        address,
        pincode,
      },
      {
        withCredentials: true
      }
    );

    if (response.data) {
      setMessage(response.data.message);
    } else {
      setMessage("Failed to submit address.");
    }
  } catch (err) {
    setMessage("Internal Server Error");
  }

  setTimeout(() => {
    setMessage("");
  }, 3000);
}

       
    return(
        <div className="min-h-screen px-4 py-2 bg-blue-400 overflow-hidden">

            <div className="max-w-xl mx-auto mt-5">

           

            <form onSubmit={submitAddress} className="bg-white p-8 flex flex-col rounded shadow-lg w-full max-w-md space-y-6">

                <div className="text-center text-xl font-bold">Enter Address</div>

                <div>
                <label className="block text-md  text-gray-900 " >Enter State</label>
                <input placeholder="enter state " className="block w-full border-2  px-4 py-2 rounded"  onChange={(e)=>setState(e.target.value)}/>
                </div>

                
                <div>
                <label className="block text-md  text-gray-900 " >Enter City</label>
                <input placeholder="enter city " className="block w-full border-2  px-4 py-2 rounded"  onChange={(e)=>setCity(e.target.value)} />
                </div>



                
                <div>
                <label className="block text-md  text-gray-900 " >Enter Address</label>
                <input placeholder="enter Address " className="block w-full border-2  px-4 py-2 rounded"  onChange={(e)=>setAddress(e.target.value)}/>
                </div>

                  
                <div>
                <label className="block text-md  text-gray-900 " >Enter Pincode</label>
                <input placeholder="enter Pincode " className="block w-full border-2  px-4 py-2 rounded"  onChange={(e)=>setPincode(e.target.value)}/>
                </div>

                <button  className="w-full  block  px-4 py-2 rounded bg-green-500"> Submit </button>

                {message && <p className="text-center text-red-500">{message}</p>}


            </form>

            
            
        </div>

         </div>
    )
}

