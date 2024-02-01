import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/desktop/Header";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        {/* <Route path="/" element={<HomePage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
