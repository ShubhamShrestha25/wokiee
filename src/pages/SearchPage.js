import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchProducts,
  fetchSearchData,
} from "../redux/features/productsSlice";
import { Link, useParams } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Rating,
  Select,
} from "@mui/material";
import { addToCart, getTotals } from "../redux/features/cartSlice";

const SearchPage = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [size, setSize] = useState("");
  const { searchInput } = useParams();

  const sizeHandler = (e) => {
    setSize(e.target.value);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    dispatch(getTotals());
  };

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchSearchData(searchInput));
  }, [dispatch, searchInput]);
  return (
    <div className="Products" style={{ marginTop: "3rem" }}>
      {products
        .filter((product) => {
          if (searchInput === "") {
            return product;
          } else if (
            product.title.toLowerCase().includes(searchInput.toLowerCase())
          ) {
            return true;
          }
          return false;
        })
        .map((product) => (
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
  );
};

export default SearchPage;
