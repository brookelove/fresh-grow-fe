import { Link } from 'react-router-dom';
import "../assets/CSS/components/ProductCard.css"

// this is on product page when searching and homepage
export default function ProductCard ({product}){
    const imageSrc = require(`../Images/${product.image_url}`)
    console.log(product.image_url)
    console.log(imageSrc);
    return(
        <Link to ={{
            pathname: `product/${product.id}`,
             // the target route 
            state: { product: product 
         }}}
         className="productCardConatiner" >
            <img src={imageSrc} className="smallProductImage"/>
            <div>
                <h5>{product.product_name}</h5>
                <h6>${product.price}</h6>
            </div>
            <h6 className="quickDes">Quick Description</h6>
        </Link>
    )
}