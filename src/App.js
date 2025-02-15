import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/TikTokFoodUI";
import RestaurantLayout from "./components/RestaurantLayout";
import SplashVideo from "./components/SplashVideo";
import CartComponent from "./components/CartComponent";
import MenuItemDetail from "./components/MenuItemDetail";
import Profile from "./components/Profile";
import FavoritesRestaurants from "./components/FavoritesRestaurants";
import ChangePassword from "./components/ChangePassword";
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
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/FavoritesRestaurants"
            element={<FavoritesRestaurants />}
          />
          <Route path="/ChangePassword" element={<ChangePassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
