import { Close } from "@mui/icons-material";
import "./Catagories.css";

const Catagories = ({ showMenu, setShowMenu }) => {
  return (
    <div className={showMenu ? "catagories active" : "catagories"}>
      <div className="closeMenu" onClick={() => setShowMenu(!showMenu)}>
        <Close className="closeIcon " />
      </div>
      <div className="catItems">
        <p>HOME</p>
      </div>
      <div className="catItems">
        <p>SHOP</p>
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
