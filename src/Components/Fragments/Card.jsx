/* eslint-disable react/prop-types */
import Button from "../Elements/Button/button"

const CardProduct = (props) => {
 
    const {children} = props
    return (
        <div className=" mx-2 w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between ">
       
     {children}
      
         </div>
        
    )
}


const Body = (props) => {
    const {children, name} = props
    
    return(
        <div className="px-5 pb-5 h-full">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-white ">{name}</h5>
            <p className="text-s text-white">{children}</p>
        </a>
    </div>
    )
}

const Footer = (props) => {

    const {price,handleAddtoCart,id } = props
    
    return(
        <div className="flex item-center justify-between px-5 pb-5">
        <span className="text-xl font-bold text-white ">Rp{price.toLocaleString('id-ID', {styles: 'currency', currency: 'IDR'})}</span>
        <Button className="bg-blue-600  " onClick={() => handleAddtoCart(id)}>Add To Oshi</Button>
     </div>
    )
}
const Header = (props) => {
    const {image} = props
    
    return (
        <a href="#">
        <img src={image} alt="" className=" p-8 rounded-t-lg "/>
    </a>
    )
}


//Memangggil tanpa buat file baru
CardProduct.Header= Header;
CardProduct.Footer = Footer;
CardProduct.Body = Body;


export default CardProduct
