// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CurrencyProvider } from "./Context/CurrencyContext"; // Context Provider import
import Layout from "./Layouts/Layout";
import Home from "./Layouts/MainContent";
import About from "./Pages/About";
import Services1 from "./Pages/ServicePageFirst";
import Services2 from "./Pages/ServicePageSecond";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";

function App() {
  return (
    <Router>
      <CurrencyProvider>
        {" "}
        {/* Barcha komponentlar CurrencyContext’ga kiradi */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services/service1" element={<Services1 />} />
            <Route path="services/service2" element={<Services2 />} />
            <Route path="/products/:category" element={<ProductsPage />} />
            <Route
              path="/products/:category/:productId"
              element={<ProductDetailPage />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </CurrencyProvider>
    </Router>
  );
}

export default App;
