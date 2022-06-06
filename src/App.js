import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SingleProductPage from "./pages/singleproduct/SingleProductPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
