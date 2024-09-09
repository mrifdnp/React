/* eslint-disable react/jsx-key */

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

const ProductPage = () => {
    return (
        <div className="flex justify-center py-5">


 {oshi.map((oshi)=>(

 <CardProduct>
 <CardProduct.Header image={oshi.image}/>
 
  <CardProduct.Body title={oshi.title}>
     {oshi.description}
  </CardProduct.Body>
 
  <CardProduct.Footer price={oshi.price}/>
 
  </CardProduct>
 ))}
        </div>
    );
};

export default ProductPage