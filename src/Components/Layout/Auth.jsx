import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../Context/DarkMode";
import Button from './../Elements/Button/button';
const Auth =(props) => {
// eslint-disable-next-line react/prop-types
const {children, name, type} = props
const  {isDarkMode, setIsDarkMode} = useContext(DarkMode)
{console.log(isDarkMode)}
    return (
        
        <div className={`flex justify-center min-h-screen items-center ${isDarkMode && 'bg-slate-900'}`}>
        <div className="w-full max-w-xs">
          <Button className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
            onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? 'Dark' :'Light' }
          </Button>
        <h1 className=" text-3xl font-bold text-blue-600">{name}</h1>
        <p className="font-medium text-slate-500">
          Welcome, Please enter your detail
        </p>
        {children}
        <Navigation type={type}/>
      
      </div>
      </div>
    );
};

// eslint-disable-next-line react/prop-types
const Navigation = ({type}) => {
  if (type==='login') {
    return(
      <p className="text-sm- text-center">     
      Don`t have an account?
            <Link to="/register" className="text-blue-600 font-bold" >
             Sign Up 
             </Link>            
        </p>
    )
}else{
  return (
    <p className="text-sm- text-center">
      Already have an account?
      <Link to="/login" className="text-blue-600 font-bold" >
        Sign In
      </Link>
    </p>
  )
}}
export default Auth;