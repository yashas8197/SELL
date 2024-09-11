import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductsList from "./pages/ProductsList.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import WishList from "./pages/WishList.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import Profile from "./pages/Profile.jsx";
import CartList from "./pages/CartList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductsList />,
      },
      {
        path: "/product-details/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/cart",
        element: <CartList />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
