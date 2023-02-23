import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="/champions" element={<div>Champions</div>} />
          <Route path="/news" element={<div>News</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
