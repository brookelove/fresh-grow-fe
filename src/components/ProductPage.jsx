import ProductCard from "./ProductCard";

export default function ProductPage (){
    return (
        <section className="productPageContainer">
            {/* where this will be mapped over to get individual products in the quick view */}
            <ProductCard/>
        </section>
    )
}