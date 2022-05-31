import {
  PersonOutlineOutlined,
  Search,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import "./Navbar.css";

const Navbar = () => {
  return (
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
      </div>
    </div>
  );
};

export default Navbar;
