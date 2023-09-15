import "../assets/CSS/components/CategoryCard.css"

export default function CategoryCard({category}){
    
    return (
        <section className="categoryCardContainer">
            <div>
                <h1>{category.category_name}</h1>
            </div>
        </section>
    )
}