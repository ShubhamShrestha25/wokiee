import "./SingleProductPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { viewProducts } from "../../redux/features/productsSlice";
import { useParams } from "react-router-dom";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SingleProductPage = () => {
  const singleProduct = useSelector((state) => state.products.singleProduct);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [size, setSize] = useState("");

  useEffect(() => {
    dispatch(viewProducts(id));
  }, [dispatch, id]);

  const sizeHandler = (e) => {
    setSize(e.target.value);
  };

  return (
    <div className="singleProductContainer">
      <div className="singleProductLeft">
        <img src={singleProduct.image} alt="" />
      </div>
      <div className="singleProductRight">
        <div className="singleProductTitle">
          <h3>{singleProduct.title}</h3>
        </div>
        <div className="SingleProductDesc">{singleProduct.desc}</div>
        <div className="SingleProductPriceSize">
          <FormControl fullWidth>
            <InputLabel id="size">Size</InputLabel>
            <Select
              label="size"
              value={size}
              sx={{
                width: "5rem",
                height: "3.2rem",
              }}
              onChange={sizeHandler}
            >
              {singleProduct.size?.map((s) => (
                <MenuItem value={s} key={s}>
                  {s}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="singleProductPrice">{singleProduct.price}</div>
        </div>
        <div className="productCardButton">
          <button className="productButton">Add To Card</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
