import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import io from "socket.io-client";
import Homepage from "./pages/Homepage";
import Champions from "./pages/Champions";
import Search from "./pages/Search";
import UserInformation from "./pages/User";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import CartPage from "./pages/CartPage";
import SignIn from "./pages/SignIn";
import ChampionView from "./pages/ChampionView";
import ScrollToTop from "./helpers/scrollToTop";
import News from "./pages/News";
import Rank from "./pages/Rank";
import TeamPage from "./pages/TeamPage";
import Chat from "./pages/Chat";
import New from "./pages/New";
import SignUp from "./pages/SignUp";
import NewAdmin from "./pages/NewAdmin";
import ProductAdmin from "./pages/ProductAdmin";
import Checkout from "./pages/CheckOut";
import { API_IMAGES } from "./default-value";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import ShopIcons from "./pages/ShopIcons";
import WheelPrizes from "./pages/WheelPrizes";
const socket = io(`${API_IMAGES}`).connect();
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/champions" element={<Champions />} />
          <Route path="/news" element={<News />} />
          <Route path="/new/:id" element={<New />} />
          <Route path="/search" element={<Search />} />
          <Route path="/user/:username" element={<UserInformation />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop-icons" element={<ShopIcons />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/chat" element={<Chat socket={socket} />} />
          <Route path="/profile/:id" element={<TeamPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/game" element={<WheelPrizes />} />
          <Route
            path="/champions/championview/:name"
            element={<ChampionView />}
          />
          <Route path="/news/add" element={<NewAdmin />} />
          <Route path="/admin/product" element={<ProductAdmin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
