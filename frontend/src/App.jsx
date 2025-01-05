import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import PlaceOrder from "./pages/PlaceOrder/placeOrder";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/cart";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? (
        <Login setShowLogin={setShowLogin} />
      ) : (
        <div className="App">
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/PlaceOrder" element={<PlaceOrder />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
