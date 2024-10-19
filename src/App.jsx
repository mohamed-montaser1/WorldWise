import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <div>
      {/* The p elements before and after the BrowserRouter element are static for all pages */}
      <p>Static Content</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </BrowserRouter>
      <p>Another Static Content</p>
    </div>
  );
}

export default App;
