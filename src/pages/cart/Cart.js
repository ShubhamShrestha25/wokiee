import { ArrowBack } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link to="/shop">
              <span>Start Shopping</span>
              <ArrowBack />
            </Link>
          </div>
        </div>
      ) : (
        <div> 
          <div className="titles">
            <h3 className="product-title">Product</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems?.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={cartItem.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
