"use client";
import { ShoppingCart, MapPin, Search, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAdminStore ,cartcount } from "../store/useAdminStore";
import Home from "../home/page";


export default function Navbar() {
  const isAdmin = useAdminStore((state) => state.isAdmin);
  const [Cart, setCart] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); 
  const [searchData , setSearchData] = useState('');




  const router = useRouter();

  function ToCartPage() {
    router.push("/cart");
  }



  function ToUploadData() {
    router.push("/upload");
  }

  function sendLogout() {
    localStorage.removeItem("token");
    useAdminStore.getState().setIsAdmin(false);
    router.replace("/signin");
  }
  function GotoHome(){
    router.push("/home");
  }

  function ToAddressPage(){
    router.push("/address");
  }


  async function SearchSubmit(e: any) {
       
      if(searchData.length >1){
             
       router.push(`/home?search=${encodeURIComponent(searchData)}`);

      }
      else{
         console.log("Invalid Request")
      }
  }





  



  return (
    <div>
      {/* Navbar */}
      <header className="flex items-center justify-between bg-gray-500 px-4 py-3 shadow-md ">
        {/* Logo */}
        <div className="w-10 sm:w-24">
          <button onClick={GotoHome} aria-label="Home Button"><img src="/logomain.jpg" alt="logo" className="w-full rounded-md" /></button>
        </div>

        {/* Search Bar */}
        <form onSubmit={SearchSubmit} className="hidden sm:flex w-1/3 bg-white rounded-xl px-3 py-1 border hover:border-black">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full px-2 py-1 outline-none text-sm"
            onChange={(e)=>setSearchData(e.target.value)}
          />
          <button  aria-label="Search " type="submit">
            <Search height={24} />
          </button>
        </form>

        {/* Location (visible on sm+) */}
        <div className="hidden sm:flex flex-col items-center text-white font-bold border hover:border-black rounded px-3 py-2">
          
          <button  onClick={ToAddressPage}  className="text-sm cursor-pointer ">Address & Location</button>
          <MapPin className="text-red-600" size={18} />
        </div>

        {/* Cart */}
        <div className="flex items-center px-3 py-2 border hover:border-black rounded shadow-md text-white relative">
          <button onClick={ToCartPage} aria-label="Go to cart" title="cart">
            <ShoppingCart width={24} height={24}  className="cursor-pointer"/>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              {Cart}
            </span>
          </button>
        </div>

        {/* Admin Upload */}
        {isAdmin && (
          <div className="hidden sm:block px-3 py-2 text-white font-bold border hover:border-black rounded shadow-md">
            <button onClick={ToUploadData} >Upload</button>
          </div>
        )}

        {/* Logout (sm+) */}
        <div className="hidden sm:block px-3 py-2 border hover:border-black rounded shadow-md cursor-pointer text-white">
          <button onClick={sendLogout} title="logout">Logout</button>
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={28} />
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden flex flex-col bg-gray-100 px-4 py-2 space-y-2 text-sm shadow-md">
          <form onSubmit={SearchSubmit} className="flex bg-white rounded-md px-2 py-1 border hover:border-black">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full px-2 py-1 outline-none text-sm"
              onChange={(e)=>setSearchData(e.target.value)}
            />
            <button aria-label="Toggle mobile menu" type="submit">
              <Search height={20} />
            </button>
          </form>

          {isAdmin && (
            <button onClick={ToUploadData} className="w-full text-left px-2 py-1 bg-green-400 text-white rounded">
              Upload Product
            </button>
          )}

          <button onClick={ToAddressPage} className="w-full text-left px-2 py-1 border rounded"> Address</button>

          <button onClick={ToCartPage} className="w-full text-left px-2 py-1 border rounded">
            🛒 Cart ({Cart})
          </button>

          <button onClick={sendLogout} className="w-full text-left px-2 py-1 bg-red-500 text-white rounded">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
