import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          alt="logo"
          src="https://banner2.cleanpng.com/20180517/obq/kisspng-amazon-com-amazon-alexa-retail-amazon-prime-order-amazon-5afd8d9f145d12.3907629815265663030834.jpg"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && "/Login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">hello Guest</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">hello</span>
          <span className="header__optionLineTwo">hello</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">hello</span>
          <span className="header__optionLineTwo">hello</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">hello</span>
          <span className="header__optionLineTwo">hello</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket ">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
