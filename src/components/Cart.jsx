 import { useEffect } from "react"
import "../assets/CSS/components/Cart.css"

export default function Cart({onClose}){
    let storedItems = localStorage.getItem('cart');
    let getCartItems = []
    let totalSum = 0

    try{
        getCartItems = storedItems ? JSON.parse(storedItems) : [];
    } catch (e) {
        console.error(e)
    }
    
    console.log(getCartItems)
    // deleteing individual times from cart
    const deleteCartItem = (index) => {
        getCartItems.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(getCartItems));
        // force update
        window.location.reload();
    };

    const options = {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            orderItems: getCartItems.map(item => ({
                productId:item.id,
                quantity:item.quantity,
                price: item.price
            }))
        
        }),
    };

    let createOrder = async () => {
        try {
            // if need to correct backend change to https://localhost
       //https://freshglow.onrender.com
            let response = await fetch('https://freshglow.onrender.com/api/orders/', options);
            console.log(response)

            const data = await response.json();
            console.log(data);

            if(response.status === 200) {
                console.log(data);
            } else {
                console.error("Server Response ", response);
            }

        } catch (error) {
            console.error("Error ", error);
        }

    }

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    
    return(
        <section className="cartContainer">
            <div className="dontMove"></div>
            <div className="checkoutSection">
                <header>
                    <h1>FRESH GLOW</h1>
                    <div className="cartInfo">
                        <h2>CART ({getCartItems && getCartItems.length > 0 ? getCartItems.length : 0})</h2>
                        <span className="close" onClick={onClose}>&times;</span>
                    </div>
                </header>
                <h6>SHOPPING CART</h6>
                <main>
                {getCartItems && getCartItems.length > 0 ? getCartItems.map((product, i) => {
                totalSum += parseFloat(product.price);
                return (
                  <div key={i} className="cartItem">
                    <div className="titleRem">
                    <span className="removeBtn" onClick={() => deleteCartItem(i)}>&times;</span>
                    <h1>{product.product_name}</h1>
                    </div>
                    <div className="quantPrice">
                        <h1>{product.quantity} Item(s)</h1>
                        <h1>${product.price}</h1>
                    </div>
                  </div>
                )
                })
                : <h1 className="noItems">LET'S GET TO SHOPPING</h1>}
                </main>
                <section>
                    <div>
                        <p>Subtotal</p>
                        <p>${totalSum.toFixed(2)}</p>
                    </div>
                </section>
                <footer>
                <p>Shipping and promotions calculated in checkout.</p>

                <p>Sales tax amount shown in checkout is a best estimate and may differ from amount actually charged and shown on Order Confirmation email.</p>
                <button onClick={createOrder}>CHECKOUT</button>
                </footer>
            </div>
        </section>
    )
}