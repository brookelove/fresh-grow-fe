import "../assets/CSS/components/CategoryCard.css"

export default function CategoryCard({category}){
    console.log(category)
    
    return (
        <section className="categoryCard">
            <div>
                <h1>{category.category_name}</h1>
            </div>
        </section>
    )
}