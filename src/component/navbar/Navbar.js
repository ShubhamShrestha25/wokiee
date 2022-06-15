import {
  PersonOutlineOutlined,
  Search,
  ShoppingBagOutlined,
  Menu,
} from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import Catagories from "../catagories/Catagories";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="navbar">
        <Link className="link" to="/">
          <img src="/images/logo.png" alt="" />
        </Link>
        <div className="navRight">
          <div className="navRightItems">
            <Search />
          </div>
          <div className="navRightItems">
            <Link className="link" to="/cart">
              <ShoppingBagOutlined />
            </Link>
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
    </>
  );
};

export default Navbar;
