import "./HomeProducts.css";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getTotals } from "../../redux/features/cartSlice";
import { Link } from "react-router-dom";

const BestSelling = () => {
  const { products } = useSelector((state) => state.products);
  const [value, setValue] = useState(4);
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  const sizeHandler = (e) => {
    setSize(e.target.value);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(getTotals());
  };

  return (
    <>
      <div className="ProductsTop">
        <h3>Best Selling Products</h3>
        <p>Our best selling product this week</p>
      </div>
      <div className="Products">
        {products.map((product) => (
          <div className="productCard" key={product.id}>
            <div className="mainImages">
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt="black" />
              </Link>
            </div>
            <div className="productDetails">
              <h4 className="productTitle">{product.title}</h4>
              <div className="productStar">
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                />
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
                      <MenuItem value="S">S</MenuItem>
                      <MenuItem value="M">M</MenuItem>
                      <MenuItem value="L">L</MenuItem>
                      <MenuItem value="XL"> XL</MenuItem>
                      <MenuItem value="XXL">XXL</MenuItem>
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

export default BestSelling;
