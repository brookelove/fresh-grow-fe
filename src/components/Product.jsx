import "../assets/CSS/components/Product.css"

export default function Product(){
    return(
        <section className="productContainer">
            <div className="information">
            <h1>PRODUCT NAME</h1>
            <p className="subheader">DESCRIPTION</p>
            <p>
                {/* where the discription of the product goes */}
            </p>
            <div>
                <label for="size">SIZE</label>
                <select name="size">
                    <option value="8 ML">08 ML</option>
                    <option value="15 ML">15 ML</option>
                    <option value="30 ML">30 ML</option>
                    <option value="50 ML">50 ML</option>
                    <option value="80 ML">80 ML</option>
                </select>
            </div>
            <div>
                <label for="quantity">QUANTITY</label>
                <select name="quantity">
                    <option value="8 ML">1</option>
                    <option value="15 ML">2</option>
                    <option value="30 ML">3</option>
                    <option value="50 ML">4</option>
                    <option value="80 ML">5</option>
                </select>
            </div>
            <button>ADD TO CART</button>
            </div>
            {/* picture of the product */}
            <div className="image"/>
        </section>
    )
}