import "../assets/CSS/components/CategoryCard.css"
import faceCard from "../assets/Images/covers/2.png"
import bodyCard from "../assets/Images/covers/1.png"

export default function CategoryCard({category}){
    let renderImg = () => {
        switch (category.category_name) {
            case "Face":
                return faceCard
            case "Body":
                return bodyCard
            default:
                return null
        }
    }
    let changeToUpper = (uppercaseName) => {
        return uppercaseName.toUpperCase()
    }
    return (
        <section className="categoryCard">
            <div>
            <img src={renderImg(category.category_name)} alt={category}/>
                <h1>{changeToUpper(category.category_name)}</h1>
            </div>
        </section>
    )
}