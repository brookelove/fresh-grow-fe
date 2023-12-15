import { useEffect, useState } from "react"
import "../assets/CSS/components/Cart.css"

export default function Cart({onClose}){
    let storedItems = localStorage.getItem('cart');
    // this creates the cart that totals all of the amount and cart
    //empty array to store items 
    let getCartItems = []
    let totalSum = 0

    try{
        getCartItems = storedItems ? JSON.parse(storedItems) : [];
    } catch (e) {
        console.error(e)
    }
    

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
                price: item.price // sending price for calculating total on server-side
            }))
        
        }),
    };

    let createOrder = async () => {
        try {
            let response = await fetch('http://localhost:3001/api/orders/', options);
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
                  <div key={i} className="cartItem" onClick={() => deleteCartItem(i)}>
                    <h1>{product.product_name}</h1>
                    <h1>${product.price}</h1>
                  </div>
                )
                })
                : <h1>You have to shop first</h1>}
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