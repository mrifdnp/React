import Auth from "../Components/Layout/Auth";
import FormRegister from "../Components/Fragments/FormRegister";

const RegisterPage = () => {
    
    return(
        <Auth name="Register" type="register">
            <FormRegister />
           
        </Auth>
    );
}

export default RegisterPage;