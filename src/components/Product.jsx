import { useParams} from 'react-router-dom';
import "../assets/CSS/components/Product.css"
import { useEffect, useState } from 'react';
import CartModal from './CartModal';

export default function Product(){
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [imageSrc, setImageSrc] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => setIsModalVisible(true);
    const hideModal = () => setIsModalVisible(false);
    
    let addItem = () =>{
        const selectedQuantity = document.querySelector('select[name="quantity"]').value;
        const selectedSize = document.querySelector('select[name="size"]').value;
        let cartItems = localStorage.getItem('cart');
        const item = {
            ...product,
            quantity: selectedQuantity,
            size: selectedSize
        };

        if (cartItems) {
            cartItems = JSON.parse(cartItems);
            if (!Array.isArray(cartItems)) {
                cartItems = [];
            }

            const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);

            if (existingItemIndex !== -1) {
                cartItems[existingItemIndex].quantity = selectedQuantity;
            } else {
                cartItems.push(item);
            }
        } else {
            cartItems = [item];
        }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    showModal();
    } 

    useEffect(()=> {
        fetch(`https://freshglow.onrender.com/api/products/${id}`)
        .then((response)=>response.json())
        .then((data)=> {
            setProduct(data)
            const dataimageSrc = require(`../Images/${data.image_url}`)
            setImageSrc(dataimageSrc)
        })
    }, [id])
    console.log(imageSrc)
    return(
        <section className="productContainer">
            <div className="information">
            <h1>{product.product_name}</h1>
            <p className="subheader">DESCRIPTION</p>
            <p>{product.quick_description}</p>
            <p>
                {product.long_description}
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
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <button onClick={addItem}>ADD TO CART</button>
            {isModalVisible && <CartModal hideModal={hideModal} />}
            </div>
            {/* picture of the product */}
            <img className="image" src={imageSrc} alt={product.product_name}/>
        </section>
    )
}