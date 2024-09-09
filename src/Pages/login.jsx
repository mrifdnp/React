import Auth from "../Components/Layout/Auth";
import FormLogin from "../Components/Fragments/FormLogin";

const LoginPage = () => {
    
    return(
        <Auth name="Login" type="login">
            <FormLogin />
          
        </Auth>
    );
}

export default LoginPage;