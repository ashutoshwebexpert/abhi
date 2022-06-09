import React from 'react';
//css
import "./App.css";
import "./css/home.css";
// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import HeaderApp from "./components/header";
import FooterApp from "./components/footer";
import Testing from "./components/Testing";
//views
import HomeApp from "./views/home";
import Products from "./views/products";
import ProductDetails from "./views/productDetails";
import PageNotFound from "./views/PageNotFound";

function App() { 
  return (

      <Router>
        <HeaderApp />
        <Routes>
          <Route exact path="/" element={<HomeApp/>} />
          <Route path="/products/:category" element={<Products/>} />
          <Route path="/products/details" element={<ProductDetails/>} />
          <Route exact path="/testing" element={<Testing/>} />
          <Route path="*" element={<PageNotFound/>} status={404}/>
        </Routes>
        <FooterApp />
      </Router>
  );
}

export default App;
