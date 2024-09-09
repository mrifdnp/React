import { Link } from "react-router-dom";

const Auth =(props) => {
// eslint-disable-next-line react/prop-types
const {children, title, type} = props
    return (
        
        <div className="flex justify-center min-h-screen items-center">
        <div className="w-full max-w-xs">
        <h1 className=" text-3xl font-bold text-blue-600">{title}</h1>
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