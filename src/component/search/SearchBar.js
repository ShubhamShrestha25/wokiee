import { Close, Search } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Search.css";

const SearchBar = ({ showSearchBar, setShowSearchBar }) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className={showSearchBar ? "search active" : "search"}>
      <div className="searchBarTop">
        <p>What are you Looking for?</p>
        <Close onClick={() => setShowSearchBar(false)} />
      </div>
      <div className="searchBar">
        <div className="searchInput">
          <input
            type="text"
            placeholder="search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Link to={`/searchresults/${searchInput}`} className="link">
            <Search style={{ color: "#007bff" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
