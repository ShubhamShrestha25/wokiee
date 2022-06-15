import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SingleProductPage from "./pages/singleproduct/SingleProductPage";
import Shop from "./component/shop/Shop";
import Navbar from "./component/navbar/Navbar";
import Copyright from "./component/footer/Copyright";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Copyright />
    </div>
  );
}

export default App;
