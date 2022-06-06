import {
  PersonOutlineOutlined,
  Search,
  ShoppingBagOutlined,
  Menu,
} from "@mui/icons-material";
import { useState } from "react";
import Catagories from "../catagories/Catagories";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="navbar">
        <img src="./images/logo.png" alt="" />
        <div className="navRight">
          <div className="navRightItems">
            <Search />
          </div>
          <div className="navRightItems">
            <ShoppingBagOutlined />
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
