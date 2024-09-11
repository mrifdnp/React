import { useRef } from "react";
import Button from "../Components/Elements/Button/button";
import CardProduct from "../Components/Fragments/Card";
import { useState,useEffect } from "react";
import { getProducts } from "../services/product.service";
const products = [

];

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);


  useEffect(()=>{
    
    setCart(JSON.parse(localStorage.getItem("cart")) || [])
   
  },[])


  useEffect(() => {
    getProducts((data) => {
   setProducts (data)
    })
  },[])
  useEffect(() => {
    if (products.length>0 && cart.length > 0) {
      const sum = cart.reduce((acc,item)=>{
        const product = products.find((product)=>product.id === item.id);
        return acc+product.price * item.qty
      },0)
      setTotalPrice(sum)
      localStorage.setItem("cart",JSON.stringify(cart))
    }
  },[cart,products])

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


  const cartRef=useRef(JSON.parse(localStorage.getItem("cart")) || [])


  // eslint-disable-next-line no-unused-vars
  const handleAddtoCartRef = (id) => {
   cartRef.current = [...cartRef.current, {id, qty: 1}]
   localStorage.setItem("cart",JSON.stringify(cartRef.current))
  }

const totalPriceRef = useRef(null)

useEffect(()=>{
  if( cart.length > 0){
    totalPriceRef.current.style.display = "table-row ";
    }else{
    totalPriceRef.current.style.display = "none";
    }
    },[cart])



  return (
    <>
      <div className="flex justify-end h-20 bg-gray-800 text-white items-center px-10 ">
        {email}
        <Button className="ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap my-2 gap-4">
          {products.length > 0 && products.map((products) => (
            <CardProduct key={products.id}>
              <CardProduct.Header image={products.image} />

              <CardProduct.Body name={products.title}>
                {products.description}
              </CardProduct.Body>

              <CardProduct.Footer 
              price={products.price}
              id={products.id}
               handleAddtoCart={handleAddtoCart}/>
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4 ">
          <h1 className="text-3xl font-bold text-gray-700 ml-5 mb-2">Cart</h1>
         
          <table className="table-auto text-left border-separate border-spacing-x-5"><thead>
            <tr>
                <th className="w-400px">Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
                

                </tr></thead>
                <tbody>
                {products.length > 0 &&  cart.map((item) => {
                   const product =products.find((products) =>products.id ===item.id )
                   return (
                       <tr key={item.id}>
                        <td>{product.title}</td>
                        <td>Rp{product.price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                        <td>{item.qty}</td>
                        <td>Rp{(product.price*item.qty).toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</td>
                       </tr>
                   )
                })} 
               <tr ref={totalPriceRef}>
                  
                  <td colSpan={3} className="font-bold">
                 Total Price</td>
                  <td className="font-bold">
                  ${totalPrice.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}
                  </td>
                  
                  </tr>  
                </tbody>
                    
                    </table>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
