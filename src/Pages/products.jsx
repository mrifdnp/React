import Button from "../Components/Elements/Button/button";
import CardProduct from "../Components/Fragments/Card";
import { useState } from "react";
const oshi = [
  {
    id: 1,
    image: "/teresa.jpg",
    name: "IKEDA TERESA",
    description: "No.1 Best Girl",
    price: 10000,
  },
  {
    id: 2,
    image: "/ayame.jpg",
    name: "Ayame shan",
    description: "Cutest Girl",
    price: 4000,
  },
  {
    id: 3,
    image: "/shizuki.jpeg",
    name: "Shiizuki",
    description: "shy girl",
    price: 3000,
  },
];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([
    {
     id: 1,
      qty: 20,
    },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };


  const handleAddtoCart= (id) => {
  if(cart.find(item => item.id ===id)){
    setCart(
        cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item)) //add 1
  }else{
    setCart([...cart, {id, qty: 1}]) //new itemm
  }
  }

  return (
    <>
      <div className="flex justify-end h-20 bg-gray-800 text-white items-center px-10 ">
        {email}
        <Button className="ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap my-2">
          {oshi.map((oshi) => (
            <CardProduct key={oshi.id}>
              <CardProduct.Header image={oshi.image} />

              <CardProduct.Body name={oshi.name}>
                {oshi.description}
              </CardProduct.Body>

              <CardProduct.Footer 
              price={oshi.price}
              id={oshi.id}
               handleAddtoCart={handleAddtoCart}/>
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4 ">
          <h1 className="text-3xl font-bold text-gray-700 ml-5 mb-2">Cart</h1>
         
          <table className="table-auto text-left border-separate border-spacing-x-5"><thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>

                </tr></thead>
                <tbody>
                {cart.map((item) => {
                   const product =oshi.find((oshi) =>oshi.id ===item.id )
                   return (
                       <tr key={item.id}>
                        <td>{product.name}</td>
                        <td>Rp{product.price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                        <td>{item.qty}</td>
                        <td>Rp{(product.price*item.qty).toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                       </tr>
                   )
                })}    
                </tbody>
                    
                    </table>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
