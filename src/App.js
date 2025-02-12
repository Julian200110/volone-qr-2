import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/TikTokFoodUI";
import RestaurantLayout from "./components/RestaurantLayout";
import SplashVideo from "./components/SplashVideo";
import CartComponent from "./components/CartComponent";
import MenuItemDetail from "./components/MenuItemDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SplashVideo />} />
          <Route path="/slider" element={<HomePage />} />
          <Route path="/menu" element={<RestaurantLayout />} />
          <Route path="/cart" element={<CartComponent />} />
          <Route path="/details" element={<MenuItemDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
