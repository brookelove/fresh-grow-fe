import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import ProductCard from "./ProductCard";
import "../assets/CSS/components/ProductPage.css"

export default function ProductPage (){
    const [products, setProducts] = useState([]);
    const params = useParams();

    useEffect(()=> {
        if(Object.keys(params).length === 0) {
            fetch('http://localhost:3001/api/products').then((response)=>response.json()).then((data)=> {
            setProducts(data)
        })
        } else {
            fetch(`http://localhost:3001/api/categories/${params.categoryId}`).then((response)=>response.json()).then((data)=> {
                setProducts(data.products)
        })
        }
        
    }, [params])
    return (
        <section className="productPageContainer">
            { products.map(product => <ProductCard key={product.id} product={product}/>) }
        </section>
    )
}