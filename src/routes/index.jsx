import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppHeader from "../components/layout/header";
import Footer from "../components/layout/footer";

import LandingPage from "./../components/pages/landingPage/index";
import ProductCategory from "../containers/pages/productCategory";
import ProductDetails from "../containers/pages/productDetails";
import GetData from "../containers/GetData";
import Cart from "../containers/pages/cart";

function AppRoutes() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="product-categories" element={<ProductCategory />} />
        <Route path="product-details" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />

        <Route path="getdata" element={<GetData />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
