
import CardProduct from "../Components/Fragments/Card"

const ProductPage = () => {
    return (
        <div className="flex justify-center py-5">
 <CardProduct>
<CardProduct.Header image="/ayame.jpg"/>

 <CardProduct.Body title="AYAME SHANNN">
    Cutest Girl EVER
 </CardProduct.Body>

 <CardProduct.Footer price="Priceless"/>

 </CardProduct>
        </div>
    )
}

export default ProductPage