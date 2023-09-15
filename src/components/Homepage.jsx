import "../assets/CSS/components/Homepage.css"
import lemons from "../assets/Images/lemons.svg"
import CategoryCard from "./CategoryCard"
export default function Homepage(){
    return(
        <section>
        <div className="hero">            
            <h1>FRESH GLOW</h1>
        </div>
        <div className="categoryContainer">
            <h2 className="subHeader" id="categoryCards">CATEGORY</h2>
            <CategoryCard/>
            </div>
        </section>
    )
}