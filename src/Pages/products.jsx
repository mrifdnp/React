
import Button from "../Components/Elements/Button/button"
import CardProduct from "../Components/Fragments/Card"


const oshi = [
    {
        id:1,
        image : "/teresa.jpg",
        title : "IKEDA TERESA",
        description : "No.1 Best Girl",
        price : "Priceless"
    },
    {
        id:2,
        image : "/ayame.jpg",
        title : "Ayame shan",
        description : "Cutest Girl",
        price : "Priceless"
    },
    {
        id:3,
        image : "/shizuki.jpeg",
        title : "Shiizuki",
        description : "shy girl",
        price : "Priceless"
    }
]

const email = localStorage.getItem('email')

const ProductPage = () => {
    const handleLogout = () => {
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        window.location.href = "/login" 
    }
    return (
        <>
          <div className="flex justify-end h-20 bg-gray-800 text-white items-center px-10 ">{email}
            <Button className="ml-5" onClick={handleLogout}>Logout</Button>
          </div>
        <div className="flex justify-center py-5">

 {oshi.map((oshi)=>(

 <CardProduct key={oshi.id}>
 <CardProduct.Header image={oshi.image}/>
 
  <CardProduct.Body title={oshi.title}>
     {oshi.description}
  </CardProduct.Body>
 
  <CardProduct.Footer price={oshi.price}/>
 
  </CardProduct>
 ))}
        </div>
        </>
    );
};

export default ProductPage