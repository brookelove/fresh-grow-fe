import {useLocation, useParams} from 'react-router-dom';
import "../assets/CSS/components/Product.css"
import { useEffect, useState } from 'react';
import Images from '../Images/Images';

export default function Product(){
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [imageSrc, setImageSrc] = useState('')

    useEffect(()=> {
        fetch(`http://localhost:3001/api/products/${id}`)
        .then((response)=>response.json())
        .then((data)=> {
            setProduct(data)
            setImageSrc(Images[data.image_url])
        })
    }, [id])
    console.log(imageSrc)
    return(
        <section className="productContainer">
            <div className="information">
            <h1>{product.product_name}</h1>
            <p className="subheader">DESCRIPTION</p>
            <p>
                {/* where the discription of the product goes */}
            </p>
            <div>
                <label htmlFor="size">SIZE</label>
                <select name="size">
                    <option value="8 ML">08 ML</option>
                    <option value="15 ML">15 ML</option>
                    <option value="30 ML">30 ML</option>
                    <option value="50 ML">50 ML</option>
                    <option value="80 ML">80 ML</option>
                </select>
            </div>
            <div>
                <label htmlFor="quantity">QUANTITY</label>
                <select name="quantity">
                    <option value="8 ML">1</option>
                    <option value="15 ML">2</option>
                    <option value="30 ML">3</option>
                    <option value="50 ML">4</option>
                    <option value="80 ML">5</option>
                </select>
            </div>
            <button>ADD TO CART</button>
            </div>
            {/* picture of the product */}
            <img className="image" src={imageSrc} alt={product.product_name}/>
        </section>
    )
}