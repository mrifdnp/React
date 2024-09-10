import InputForm from "../Elements/Input";
import Button from "../Elements/Button/button";
import Swal from 'sweetalert2';
const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
  const password = e.target.password.value;
    if (!email || !password) {
      Swal.fire({
        icon: 'warning',
        title: 'Form Belum Terisi!',
        text: 'Mohon isi semua field di form!',
      });
      return;
    }
    localStorage.setItem('email',e.target.email.value)
    localStorage.setItem('password',e.target.password.value)
    window.location.href = "/products";

  
  
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