import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./pages/Page";
import { useLocation, useNavigation } from "react-router-dom";
import "./assets/CSS/reset.css";

function App() {
  const currentPage = useLocation().pathname;
  const hasProductInRoute = currentPage.includes("/product");

  // conditionally rendering code to show the header on certain pages
  // const navigate = useNavigate();

  //Array of acceptable routes
  const availbleRoutesToShow = ["/", "/products"];

  //checking if the current route is in the
  const showHeaderAndFooter = availbleRoutesToShow.includes(currentPage);

  return (
    <div>
      {(hasProductInRoute || currentPage === "/") && <Header />}
      <main>
        <Page currentPage={currentPage} />
      </main>
      {(hasProductInRoute || currentPage === "/") && <Footer />}
    </div>
  );
}

export default App;
