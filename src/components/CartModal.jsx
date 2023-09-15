import "../assets/CSS/components/CartModal.css"

export default function CartModal (){
    return (
        <section className="addedToCart dontMove">
                <div className="card">
                    <div className="miniHero"></div>
                    <div className="sectionBtn">
                        <h1>GOOD CHOICE!</h1>
                        <button>ADD MORE + </button>
                        <button>GO TO CART</button>
                    </div>

                </div>        
        </section>
    )
}