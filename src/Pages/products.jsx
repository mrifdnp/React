

import CardProduct from "../Components/Fragments/Card";
import { useState,useEffect } from "react";
import { getProducts } from "../services/product.service";

import TableCart from "../Components/Fragments/TableCard";
import Navbar from './../Components/Layout/Navbar';
import { useContext } from "react";
import { DarkMode } from "../Context/DarkMode";




const ProductPage = () => {
//  // const [cart, setCart] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const  {isDarkMode, setIsDarkMode} = useContext(DarkMode)

  useEffect(() => {
    getProducts((data) => {
   setProducts (data)
    })
  },[])


 




  return (
    <>
     <Navbar/>
      <div className={`flex justify-center py-5 ${isDarkMode && 'bg-slate-900'}`}>
        <div className="w-3/4 flex flex-wrap my-2 gap-4">
          {products.length > 0 && products.map((products) => (
            <CardProduct key={products.id}>
              <CardProduct.Header image={products.image} id={products.id}/>

              <CardProduct.Body name={products.title}>
                {products.description}
              </CardProduct.Body>

              <CardProduct.Footer 
              price={products.price}
              id={products.id}
               />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4 ">
          <h1 className="text-3xl font-bold text-gray-700 ml-5 mb-2">Cart</h1>
         <TableCart products={products}/>
          
        </div>
      </div>
    </>
  );
};

export default ProductPage;
