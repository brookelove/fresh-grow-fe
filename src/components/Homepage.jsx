import "../assets/CSS/components/Homepage.css"
import CategoryCard from "./CategoryCard";
import introVideo from "../assets/videos/introPage.mp4"
import { useState, useEffect } from "react";


export default function Homepage(){

    const [categories, setCategories ] = useState([]);
    const [featured, setFeatured] = useState([]);
    let filterFeatured = (data) => {
        return data.isFeatured == true;
    }

    useEffect(()=> {
        fetch('http://localhost:3001/api/categories').then((response)=>response.json()).then((data)=> {
            setCategories(data)
        })
        fetch('http://localhost:3001/api/products').then((response)=>response.json()).then((data)=> {
            setFeatured(data.filter(filterFeatured))
        })
    }, [])
    console.log(categories)
    return(
        <section className="home-container"> 
            <video autoPlay loop muted className="hero">
                <source src={introVideo} type="video/mp4"/>
            </video>         
            <h1 className="title">FRESH GLOW</h1>
            <div className="categoryContainer">
            {categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
            ))}
        </div>
        <section>
            <h6>FEATURED</h6>
        </section>
        </section>
    )
}