import "./HomeProducts.css";
import Rating from "@mui/material/Rating";
import { fetchProducts } from "../../redux/features/productsSlice";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const NewProducts = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [size, setSize] = useState("");

  const sizeHandler = (e) => {
    setSize(e.target.value);
  };

  console.log(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="homeProductsTop">
        <h3>New Products</h3>
        <p>Newest product this week</p>
      </div>
      <div className="homeProducts">
        {products.map((product) => (
          <div className="productCard" key={product.id}>
            <div className="mainImages">
              <img src="" alt="" />
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

export default NewProducts;
