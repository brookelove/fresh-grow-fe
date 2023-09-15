import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';

import ProductCard from "./ProductCard";
import "../assets/CSS/components/ProductPage.css"

export default function ProductPage (){
    // const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:3001/api/products').then((response)=>response.json()).then((data)=> {
            console.log(data);
            setProducts(data)
        })
    }, [])
    console.log(products)
    return (
        <section className="productPageContainer">
            {/* where this will be mapped over to get individual products in the quick view */}
            { products.map(product => <ProductCard key={product.id} product={product}/>) }
        </section>
    )
}