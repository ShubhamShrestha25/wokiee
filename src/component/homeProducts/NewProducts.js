import "./HomeProducts.css";
import Rating from "@mui/material/Rating";
import { fetchProducts } from "../../redux/features/productsSlice";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/features/cartSlice";

const NewProducts = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [size, setSize] = useState("");

  const sizeHandler = (e) => {
    setSize(e.target.value);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="ProductsTop">
        <h3>New Products</h3>
        <p>Newest product this week</p>
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

export default NewProducts;
