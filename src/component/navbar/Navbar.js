import {
  PersonOutlineOutlined,
  Search,
  ShoppingBagOutlined,
  Menu,
} from "@mui/icons-material";
import SearchBar from "../search/SearchBar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Catagories from "../catagories/Catagories";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <>
      <div className="navbar">
        <Link className="link" to="/">
          <img src="/images/logo.png" alt="" />
        </Link>
        <div className="navRight">
          <div className="navRightItems">
            <Search onClick={() => setShowSearchBar(!showSearchBar)} />
          </div>
          <div className="navBag">
            <Link className="link" to="/cart">
              <ShoppingBagOutlined />
            </Link>
            <span className="bagQuantity">
              <span>{cartTotalQuantity}</span>
            </span>
          </div>
          <div className="navRightItems">
            <PersonOutlineOutlined />
          </div>
          <div className="hamburgerMenu" onClick={() => setShowMenu(!showMenu)}>
            <Menu />
          </div>
        </div>
      </div>
      <Catagories showMenu={showMenu} setShowMenu={setShowMenu} />
      <SearchBar
        showSearchBar={showSearchBar}
        setShowSearchBar={setShowSearchBar}
      />
    </>
  );
};

export default Navbar;
