import { Close } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Catagories.css";

const Catagories = ({ showMenu, setShowMenu }) => {
  return (
    <div className={showMenu ? "catagories active" : "catagories"}>
      <div className="closeMenu" onClick={() => setShowMenu(!showMenu)}>
        <Close className="closeIcon " />
      </div>
      <div className="catItems">
        <Link className="link" to="/">
          <p>HOME</p>
        </Link>
      </div>
      <div className="catItems">
        <Link className="link" to="/shop">
          <p>SHOP</p>
        </Link>
      </div>
      <div className="catItems">
        <p>BLOG</p>
      </div>
      <div className="catItems">
        <p>CONTACT</p>
      </div>
    </div>
  );
};

export default Catagories;
