import "./Shop.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../redux/features/productsSlice";
import { Link } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
} from "@mui/material";
import { addToCart, getTotals } from "../../redux/features/cartSlice";

const Shop = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [size, setSize] = useState("");

  const sizeHandler = (e) => {
    setSize(e.target.value);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(getTotals());
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <>
      <div className="ProductsTop">
        <h3>SHOP</h3>
        <p>All available products</p>
      </div>
      <div className="Products">
        {products.map((product) => (
          <div className="productCard" key={product.id}>
            <div className="mainImages">
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt="" />
              </Link>
            </div>
            <div className="productDetails">
              <h4 className="productTitle">{product.title}</h4>
              <div className="productStar">
                <Rating name="simple-controlled" value={product.rating} />
              </div>
              <p>{product.desc}</p>
              <div className="productDetailsBottom">
                <div className="productDetailsSize">
                  <FormControl fullWidth>
                    <InputLabel id="size">Size</InputLabel>
                    <Select
                      value={size}
                      label="size"
                      sx={{
                        width: "5rem",
                        height: "3.2rem",
                      }}
                      onChange={sizeHandler}
                    >
                      {product.size.map((s) => (
                        <MenuItem value={s} key={s}>
                          {s}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="productDetailsPrice">${product.price}</div>
              </div>
              <div className="productCardButton">
                <button
                  className="productButton"
                  onClick={() => handleAddToCart(product)}
                >
                  Add To Card
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shop;
