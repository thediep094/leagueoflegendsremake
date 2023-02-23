import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./sections/Header";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<div>bbb</div>} />
          <Route path="/blogs" element={<div>Blogs</div>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
