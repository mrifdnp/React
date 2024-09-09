import Auth from "../Components/Layout/Auth";
import FormRegister from "../Components/Fragments/FormRegister";
import { Link } from "react-router-dom";
const RegisterPage = () => {
    
    return(
        <Auth title="Register">
            <FormRegister />
            <p className="text-sm- text-center">
                Already have an account? {" "}  
            <Link to="/login" className="text-blue-600 font-bold" > Sign In </Link>  
            </p>
        </Auth>
    );
}

export default RegisterPage;