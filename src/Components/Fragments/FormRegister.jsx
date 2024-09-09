import InputForm from "../Elements/Input";
import Button from "../Elements/Button/button";
const FormRegister = () => {
    return (
        <form action="">
        <div className="mb-6 ">
        <InputForm label="Full Name" type="text" name="fullname" placeholder="Insert your FullName"/>
        <InputForm label="Email" type="email" name="Email" placeholder="example@gmail.com"/>
        <InputForm label="Password" type="password" name="password" placeholder="********"/>
        <InputForm label="Confirm Password" type="password" name="confirmPassword" placeholder="********"/>
        <Button className="bg-blue-600 w-full">Register</Button>
        </div>
        
      </form>
    );
};

export default FormRegister