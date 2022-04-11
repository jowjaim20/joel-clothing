import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Directory from "./components/directory/Directory";
import MenuItemcopy from "./components/menu-item/MenuItemcopy";

import React from "react";

// export default HatsPage

function App() {
  return (
    <Router>
      <h1>Joel cute</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/directory" element={<MenuItemcopy />} />
      </Routes>
    </Router>
  );
}

export default App;
