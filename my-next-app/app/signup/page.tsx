"use client"
import Link from "next/link"
import { useState } from "react"
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Signup(){

    const router =useRouter();

    const[email,setEmail] = useState('');
    const[username,setUsername] =useState('');
    const[firstname,setFirstname]=useState('');
    const[lastname,setLastname]=useState('');
    const[password,setPassword] =useState('');
    const[message,setMessage] =useState('');

    async function Signupsubmit(e:any) {

        e.preventDefault();

        try{

            const response = await axios.post("http://localhost:3000/api/user/signup",{
                email:email,
                username:username,
                firstname:firstname,
                lastname:lastname,
                password:password
            })

            if(response && response.data){

                setMessage(response.data.message);
                
                router.push("/login")
                


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

            setMessage("User Registration Failed ! Please try again")
            
            setTimeout(() => {

                setMessage("");
                
            }, 3000);
        }
        
    }


    return(
        <div className="min-h-screen bg-gray-100 flex  flex-col p-5 items-center justify-center">

            <div className="w-full  max-w-md flex flex-col bg-white p-8 rounded-xl shadow-2xl ">

                <h1 className="text-md sm:text-xl text-blue-800 text-center font-bold mb-5"> Register Here </h1>

                <form className="space-y-5" onSubmit={Signupsubmit}>


                    <div>

                        <label className="block mb-1 text-gray-800 font-medium">Email</label>
                        <input placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)}
                         type="email" className="w-full border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 " required/>

                    </div>

                       <div>

                        <label className="block mb-1 text-gray-800 font-medium">Username</label>
                        <input placeholder="create your username"  onChange={(e)=>setUsername(e.target.value)}
                        type="string" className="w-full border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 " required/>

                    </div>


                       <div>

                        <label className="block mb-1 text-gray-800 font-medium">FirstName</label>
                        <input placeholder="Enter your first name min 3 letters" onChange={(e)=>setFirstname(e.target.value)}
                         type="string" className="w-full border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 " required/>

                    </div>

                       <div>

                        <label className="block mb-1 text-gray-800 font-medium">LastName</label>
                        <input placeholder="Enter your last name min 3 letters"  type="string" onChange={(e)=>setLastname(e.target.value)}
                        className="w-full border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 " required/>

                    </div>

                       <div>

                        <label className="block mb-1 text-gray-800 font-medium">Password</label>
                        <input placeholder="Enter Password"  onChange={(e)=>setPassword(e.target.value)}
                        type="password" className="w-full border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 " required/>

                    </div>

                    < button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">Submit</button>

                   
                   {message && <p className='text-md mt-2 text-red-500'>{message}</p>}

                </form>


            </div>


            <div className="w-full mt-5 items-center justify-center text-center ">
            
                               <p className="text-sm sm:text-lg text-gray-600">
                  Already Have an Account?{' '}
                  <Link href="/signin" className="text-blue-500 hover:underline cursor-pointer">
                    Sign up
                  </Link>
                </p>
            
            </div>
            
            
        </div>
    )

}