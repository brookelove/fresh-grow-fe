import "../assets/CSS/components/Homepage.css"
import CategoryCard from "./CategoryCard"
import { useState, useEffect } from "react";


export default function Homepage(){

    const [categories, setCategories ] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:3001/api/categories').then((response)=>response.json()).then((data)=> {
            console.log(data)
            setCategories(data)
        })
    }, [])
    console.log(categories)
    return(
        <section>
        <div className="hero">            
            <h1>FRESH GLOW</h1>
        </div>
        <div className="categoryContainer">
            <h2 className="subHeader" id="categoryCards">CATEGORY</h2>
            <div>
            { categories.map(category => <CategoryCard key={category.id} category={category}/>) }
            </div>
            </div>
        </section>
    )
}