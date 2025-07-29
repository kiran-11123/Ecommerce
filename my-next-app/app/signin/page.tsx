"use client"
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useAdminStore } from '../store/useAdminStore';
import { jwtDecode } from "jwt-decode"; 



export default function Signin(){

    type Token ={
        email:string,
        username:string,
        id:Number
    }

   


    const setIsAdmin = useAdminStore((state) => state.setIsAdmin);

    const[email ,setEmail] = useState('');
    const[password ,setPassword] = useState('');
    const[message ,setMessage] = useState('');
    const router =useRouter();

    async function SigninSubmit(e:any) {
        e.preventDefault();

        try{

            const response = await axios.post("http://localhost:3000/api/user/signin" , {
            email:email,
            password:password
        },{
  withCredentials: true, 
})

        if(response && response.data.message){

            setMessage(response.data.message);
            localStorage.setItem("token" , response.data.token);
            const decoded:Token = jwtDecode(response.data.token);

            if(decoded.email==='admin@gmail.com'){
                setIsAdmin(true);
            }
            

           
            router.push("/home")

            

        }
        else{
            setMessage(response.data.message);
          
        }

          

          setTimeout(() => {

                setMessage('');
                
            }, 3000);


        }
        catch(er){
            console.log(er);
            setMessage("Login Failed. Please Try again")
        }

        setTimeout(() => {

                setMessage('');
                
            }, 3000);

        
    }




    return(

        <div className="min-h-screen bg-gray-100 flex flex-col px-4 items-center justify-center">


            <div  className="w-full max-w-md bg-white rounded-lg shadow-md p-8">

                <h1 className="font-bold text-blue-800 text-center text-xl sm:text-2xl mb-6">Login Here </h1>

                <form className="space-y-5" onSubmit={SigninSubmit}>
                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">Email</label>

                        <input  type="email" onChange={(e)=>setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 "
                         required placeholder="Enter your email"/>
                    </div>

                    <div>
                        <label className="block mb-1 text-gray-700 font-medium">Password</label>

                        <input  type="password" onChange={(e)=>setPassword(e.target.value)}
                         className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 "
                          required  placeholder="Enter your password"/>
                    </div>

                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Submit</button>
                    {message && <p className='text-md mt-2 text-red-500'>{message}</p>}
                
                </form>


                <div className="w-full mt-5 items-center justify-center text-center ">

                   <p className="text-sm sm:text-lg text-gray-600">
                        Don’t have an account?{' '}
                    <Link href="/signup" className="text-blue-500 hover:underline cursor-pointer">
                        Sign up
                    </Link>
                    </p>

                </div>

                

                   

                

            </div>

            

           

        </div>
    )

}