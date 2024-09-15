import InputForm from "../Elements/Input";
import Button from "../Elements/Button/button";

import { useEffect } from "react";
import { useRef } from "react";
import { login } from "../../services/auth.service";
import { useState } from "react";
const FormLogin = () => {
  const[loginFailed, setLoginFailed] = useState("")
  const handleLogin = (e) => {
    e.preventDefault()
    const data = {
      username : e.target.username.value,
      password : e.target.password.value,
    }


login(data,(status, res) =>{
  if(status){
    localStorage.setItem('token',res)
    window.location.href = "/products";
  }
  else{
    setLoginFailed(res.response.data)
    console.log(res.response.data)
  }
});
};

  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  },[]);

  
    return (
        <form onSubmit={handleLogin}>
        <div className="mb-6 ">
        <InputForm label="Username" type="text" name="username" placeholder="teresapanda" ref={usernameRef}/>
        <InputForm label="Password" type="password" name="password" placeholder="********"/>
        <p className="text-red-600 text-center mb-5">{loginFailed}</p>
        <Button className="bg-blue-600 w-full" type ="submit">Login</Button>
        </div>
        
      </form>
    );
};

export default FormLogin