import "../assets/CSS/components/Homepage.css"
import CategoryCard from "./CategoryCard";
import introVideo from "../assets/videos/introPage.mp4"
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
        <section className="home-container"> 
            <video autoPlay loop muted className="hero">
                <source src={introVideo} type="video/mp4"/>
            </video>         
            <h1>FRESH GLOW</h1>
            <div className="categoryContainer">
            </div>
        </section>
    )
}