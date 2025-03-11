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
import ForgotPassword from "./components/ForgotPassword";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SplashVideo />} />
          <Route path="/cartainteractivo/:id" element={<HomePage />} />
          <Route path="/carta" element={<RestaurantLayout />} />
          <Route path="/carrito" element={<CartComponent />} />
          <Route path="/detalles" element={<MenuItemDetail />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/iniciarsesion" element={<LogIn />} />
          <Route path="/registrarse" element={<SignUp />} />
          <Route path="/recuperarcontraseña" element={<ForgotPassword />} />
          <Route
            path="/restaurantefavorito"
            element={<FavoritesRestaurants />}
          />
          <Route path="/cambiarcontraseña" element={<ChangePassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
