import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/champions" element={<Champions />} />
          <Route path="/news" element={<News />} />
          <Route path="/search" element={<Search />} />
          <Route path="/user/:username" element={<UserInformation />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/chat" element={<Chat />} />
          {/* <Route path="/teampage" element={<TeamPage />} /> */}
          <Route
            path="/champions/championview/:name"
            element={<ChampionView />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
