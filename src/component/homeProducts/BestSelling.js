import "./HomeProducts.css";
import Rating from "@mui/material/Rating";
import products from "../../data.json";
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const BestSelling = () => {
  const [value, setValue] = useState(4);
  const [size, setSize] = useState("");

  const sizeHandler = (e) => {
    setSize(e.target.value);
  };

  return (
    <>
      <div className="homeProductsTop">
        <h3>Best Selling Products</h3>
        <p>Our best selling product this week</p>
      </div>
      <div className="homeProducts">
        {products.map((product) => (
          <div className="productCard" key={product.id}>
            <div className="mainImages">
              <img src={product.image} alt="black" />
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
                <button className="productButton">Add To Card</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BestSelling;
