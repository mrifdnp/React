import { useState } from "react";
import { useLogin } from "../../Hooks/useLogin"
import Button from "../Elements/Button/button"
import { useSelector } from "react-redux";
import { useEffect } from "react";


const Navbar =()=>{

    const [totalCart,setTotalCart]=useState(0)
    const cart = useSelector((state)=>state.cart.data)

    useEffect(()=>{
      const sum = cart.reduce((acc,item)=>{
       return acc+item.qty  ; 
       }, 0) ;
    setTotalCart(sum)
      },[cart])
    const handleLogout = () => {
        localStorage.removeItem("token");
    
        window.location.href = "/login";
      };

    const username = useLogin()
    return (
        <div className="flex justify-end h-20 bg-gray-800 text-white items-center px-10 ">
        {username}
        <Button className="ml-5" onClick={handleLogout}>
          Logout
        </Button>
        <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
            {totalCart}
        </div>
      </div>
    )
}
export default Navbar