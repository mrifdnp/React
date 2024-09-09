import InputForm from "../Elements/Input";
import Button from "../Elements/Button/button";
const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault()
    localStorage.setItem('email',e.target.email.value)
    localStorage.setItem('password',e.target.password.value)
    window.location.href = "/products"
  };
    return (
        <form onSubmit={handleLogin}>
        <div className="mb-6 ">
        <InputForm label="Email" type="email" name="email" placeholder="example@gmail.com"/>
        <InputForm label="Password" type="password" name="password" placeholder="********"/>
        <Button className="bg-blue-600 w-full" type ="submit">Login</Button>
        </div>
        
      </form>
    );
};

export default FormLogin