import "../assets/CSS/components/CartModal.css"
import { useNavigate, Link} from 'react-router-dom';
export default function CartModal ({hideModal}){
    let navigate = useNavigate();

    // const goToCart = () => {
    //     hideModal();
    //     showCart()
    // }

    return (
        <section className="addedToCart dontMove">
                <div className="card">
                    <div className="miniHero"></div>
                    <div className="sectionBtn">
                        <h1>GOOD CHOICE!</h1>
                        <Link to="/products"><button>ADD MORE + </button></Link>
                        <button>IM'READY</button>
                    </div>

                </div>        
        </section>
    )
}