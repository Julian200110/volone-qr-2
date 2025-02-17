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
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SplashVideo />} />
          <Route path="/TikTokmenu" element={<HomePage />} />
          <Route path="/Menu" element={<RestaurantLayout />} />
          <Route path="/Carrito" element={<CartComponent />} />
          <Route path="/Detalles" element={<MenuItemDetail />} />
          <Route path="/Perfil" element={<Profile />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route
            path="/RestauranteFavorito"
            element={<FavoritesRestaurants />}
          />
          <Route path="/CambiarContraseña" element={<ChangePassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
