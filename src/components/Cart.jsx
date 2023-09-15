import "../assets/CSS/components/Cart.css"

export default function Cart(){
    return(
        <section className="cartContainer">
            <div className="dontMove"></div>
            <div className="checkoutSection">
                <header>
                    <h1>FRESH GLOW</h1>
                    <div className="cartInfo">
                        <h1>CART(0)</h1>
                        <span class="close">&times;</span>
                    </div>
                </header>
                <h6>SHOPPING CART</h6>
                <main>
                {/* items addend into cout */}
                </main>
                <section>
                    <div>
                        <p>Subtotal</p>
                        <p>$0</p>
                    </div>
                </section>
                <footer>
                <p>Shipping and promotions calculated in checkout.</p>

                <p>Sales tax amount shown in checkout is a best estimate and may differ from amount actually charged and shown on Order Confirmation email.</p>
                <button>CHECKOUT</button>
                </footer>
            </div>
        </section>
    )
}