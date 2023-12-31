import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  useLocation,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Product from "./components/Product";
import LostPage from "./components/404";
import Order from "./components/Order";
import CartModal from "./components/CartModal";
import ProductPage from "./components/ProductPage";
import CategoryCard from "./components/CategoryCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <LostPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "product/:productId",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "review",
        element: <Order />,
      },
      {
        path: "ready",
        element: <CartModal />,
      },
      {
        path: "products/:categoryId?",
        element: <ProductPage />,
      },
      {
        path: "category",
        element: <CategoryCard />,
      },
      {
        path: "products/:categoryId?/product/:id",
        element: <Product />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
