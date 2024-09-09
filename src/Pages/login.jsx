import Auth from "../Components/Layout/Auth";
import FormLogin from "../Components/Fragments/FormLogin";
import { Link } from "react-router-dom";
const LoginPage = () => {
    
    return(
        <Auth title="Login">
            <FormLogin />
            <p className="text-sm- text-center">
                Don`t have an account? {" "}
               
                <Link to="/register" className="text-blue-600 font-bold" > Sign Up </Link>            
            </p>
        </Auth>
    );
}

export default LoginPage;