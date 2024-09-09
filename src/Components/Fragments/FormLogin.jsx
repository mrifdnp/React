import InputForm from "../Elements/Input";
import Button from "../Elements/Button/button";
const FormLogin = () => {
    return (
        <form action="">
        <div className="mb-6 ">
        <InputForm label="Email" type="email" name="Email" placeholder="example@gmail.com"/>
        <InputForm label="Password" type="password" name="password" placeholder="********"/>
        <Button variant="bg-blue-600 w-full">Login</Button>
        </div>
        
      </form>
    );
};

export default FormLogin