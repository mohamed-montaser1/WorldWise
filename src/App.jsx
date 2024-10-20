import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Product from "./pages/Product/Product";
import Pricing from "./pages/Pricing/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login/Login";
import AppLayout from "./pages/AppLayout/AppLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
