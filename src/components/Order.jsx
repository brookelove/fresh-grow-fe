import "../assets/CSS/components/Order.css"
import { Link } from 'react-router-dom';
export default function Order(){
    return(
        <section className="reviewContainer dontMove">
            <div className="card">
            <h1>Thanks Lovely,</h1>
            <h3>We Will Get You Glowing soon!</h3>
            <h2>Your Order Number is #______________</h2>
            <Link to="/">
                <button> Go Back To Homepage</button>
            </Link>
            </div>
        </section>
    )
}