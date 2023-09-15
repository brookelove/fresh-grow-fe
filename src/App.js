import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./pages/Page";
import { useLocation, useNavigation } from "react-router-dom";
import "./assets/CSS/reset.css";

function App() {
  const currentPage = useLocation().pathname;

  // conditionally rendering code to show the header on certain pages
  // const navigate = useNavigate();

  //Array of acceptable routes
  const availbleRoutesToShow = ["/", "/product"];

  //checking if the current route is in the
  const showHeaderAndFooter = availbleRoutesToShow.includes(currentPage);

  return (
    <div>
      {showHeaderAndFooter && <Header />}
      <main>
        <Page currentPage={currentPage} />
      </main>
      {showHeaderAndFooter && <Footer />}
    </div>
  );
}

export default App;
