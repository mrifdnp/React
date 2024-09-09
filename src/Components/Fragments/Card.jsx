/* eslint-disable react/prop-types */
import Button from "../Elements/Button/button"

const CardProduct = (props) => {
    // eslint-disable-next-line react/prop-types
    const {children} = props
    return (
        <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow">
       
     {children}
      
         </div>
        
    )
}


const Body = (props) => {
    const {children, title} = props
    
    return(
        <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xls font-semibold tracking-tight text-white">{title}</h5>
            <p className="text-s text-white">{children}</p>
        </a>
    </div>
    )
}

const Footer = (props) => {
    const {price } = props
    
    return(
        <div className="flex item-center justify-between px-5 pb-5">
        <span className="text-xl font-bold text-white ">{price}</span>
        <Button variant="bg-blue-600  ">Text Now</Button>
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
