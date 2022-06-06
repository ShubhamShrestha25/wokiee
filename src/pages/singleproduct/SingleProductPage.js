import Navbar from "../../component/navbar/Navbar";
import CopyRight from "../../component/footer/Copyright";
import "./SingleProductPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { viewProducts } from "../../redux/features/productsSlice";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const singleProduct = useSelector((state) => state.products.singleProduct);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(viewProducts(id));
  }, [dispatch, id]);

  return (
    <div className="singleProduct">
      <Navbar />
      <div className="singleProductContainer">
        <div className="singleProductLeft">
          <img src="" alt="" />
        </div>
        <div className="singleProductRight">
          <div className="SingleProductDesc">
            <h1>{singleProduct.id}</h1>
          </div>
          <div className="SingleProductPrice"></div>
          <div className="SingleProductButton"></div>
        </div>
      </div>
      <CopyRight />
    </div>
  );
};

export default SingleProductPage;
