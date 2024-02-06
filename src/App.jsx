/** @format */

import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/desktop/Header";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";

export default function App() {
  let cart = [];
  useEffect(() => {
    if (!window.localStorage.getItem("@ecommCart"))
      window.localStorage.setItem("@ecommCart", JSON.stringify(cart));
  });

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product" element={<ProductDetailsPage/>} />
        <Route
          path="/cart"
          element={<CartPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
