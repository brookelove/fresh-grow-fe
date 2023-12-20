import "../assets/CSS/components/Homepage.css"
import CategoryCard from "./CategoryCard";
import introVideo from "../assets/videos/introPage.mp4"
import modelVideo from "../assets/videos/model.mp4"
import { useState, useEffect } from "react";
import ImageSlider from "./ImageSlider";
import { Link } from "react-router-dom";


export default function Homepage(){
    const [categories, setCategories ] = useState([]);
    const [featured, setFeatured] = useState([]);
    let filterFeatured = (data) => {
        return data.isFeatured == true;
    }
    let getTwo = (data) => {
        if(data.category_name == 'Face' || data.category_name =='Body' ) {
            console.log('Matched category:', data.category_name);
            return <CategoryCard key={data.id} category={data} />
        }
        return null;
    }
    let changeToUpper = (uppercaseName) => {
        return uppercaseName.toUpperCase()
    }


    useEffect(()=> {
        fetch('http://localhost:3001/api/categories').then((response)=>response.json()).then((data)=> {
            setCategories(data)
        })
        fetch('http://localhost:3001/api/products').then((response)=>response.json()).then((data)=> {
            setFeatured(data.filter(filterFeatured))
        })
    }, [])

    return(
        <section className="home-container"> 
            <video autoPlay loop muted className="hero">
                <source src={introVideo} type="video/mp4"/>
            </video>         
            <h1 className="title">FRESH GLOW</h1>
            <div className="categoryContainer">
            {categories.map((category) => (
                getTwo(category)
            ))}
        </div>
        <section className="featuredSection">
            <div>
                {featured.map((item) => (
                    <Link to={`/product/${item.id}`} key={item.id}>
                        <h1>{changeToUpper(item.product_name)}</h1>
                    </Link>
                ))}
            </div>
                <ImageSlider/>
        </section>

        <video autoPlay loop muted className="footerHero">
                <source src={modelVideo} type="video/mp4"/>
            </video>
        </section>
    )
}