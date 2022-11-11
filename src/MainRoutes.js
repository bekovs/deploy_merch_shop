import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import EditProductPage from "./pages/EditProductPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Payment from "./pages/Payment";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsPage from "./pages/ProductsPage";
import RegistrationPage from "./pages/RegistrationPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/about",
      element: <AboutUsPage />,
      id: 2,
    },
    {
      link: "/admin",
      element: <AdminPage />,
      id: 3,
    },
    {
      link: "/cart",
      element: <CartPage />,
      id: 4,
    },
    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 5,
    },
    {
      link: "/products/:id",
      element: <ProductDetailsPage />,
      id: 6,
    },
    {
      link: "/products",
      element: <ProductsPage />,
      id: 7,
    },
    {
      link: "/login",
      element: <LoginPage />,
      id: 8,
    },
    {
      link: "/register",
      element: <RegistrationPage />,
      id: 9,
    },
    {
      link: "/payment",
      element: <Payment />,
      id: 10,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
