import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./pages/Page";
import Cart from "./components/Cart";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./assets/CSS/reset.css";

function App() {
  const currentPage = useLocation().pathname;
  const hasProductInRoute = currentPage.includes("/product");
  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCart = () => setIsCartVisible(true);
  const hideCart = () => setIsCartVisible(false);

  // conditionally rendering code to show the header on certain pages
  // const navigate = useNavigate();

  //Array of acceptable routes
  const availbleRoutesToShow = ["/", "/products"];

  //checking if the current route is in the
  // const showHeaderAndFooter = availbleRoutesToShow.includes(currentPage);

  return (
    <div>
      {(hasProductInRoute || currentPage === "/") && (
        <Header showCart={showCart} />
      )}
      {isCartVisible && <Cart onClose={hideCart} />}
      <main>
        <Page currentPage={currentPage} />
      </main>
      {(hasProductInRoute || currentPage === "/") && <Footer />}
    </div>
  );
}

export default App;
