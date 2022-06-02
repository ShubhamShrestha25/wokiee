import "./NewProducts.css";
import Rating from "@mui/material/Rating";
import { useState } from "react";

const NewProducts = () => {
  const [value, setValue] = useState(4);
  return (
    <div className="newProducts">
      <div className="newProductsTop">
        <h3>New Products</h3>
        <p>Newest product this week</p>
      </div>
      <div className="productCard">
        <div className="mainImages">
          <img src="/images/shirt.jpg" alt="black" />
        </div>
        <div className="productDetails">
          <h4 className="productTitle">Black Shirt</h4>
          <div className="productStar">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            nostrum, libero nulla dolor ut voluptate facere asperiores nisi
            consectetur, soluta corrupti praesentium voluptatum! Cumque ducimus
            libero facere eaque quos fugiat?
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
