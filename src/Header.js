import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import{useStateValue} from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Header() {
  const[{basket},dispatch]= useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://thumbs.dreamstime.com/b/shopping-icon-shopping-cart-icon-dark-background-simple-vector-icon-shopping-icon-shopping-cart-icon-dark-background-116659167.jpg"
        />
      </Link>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
      <Link to="/login">
        <div className="header_option">
          <span className="header_optionLineOne">hello user</span>

          <span className="header_optionLineTwo">Sign in</span>

        </div>
        </Link>

        <div className="header_option">

          <span className="header_optionLineOne">return</span>

          <span className="header_optionLineTwo">order</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">your</span>

          <span className="header_optionLineTwo">premium</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionbasket">
            <ShoppingBasketIcon />
            <span
              className="header_optionlineTwo
            header_BasketCount"
            >
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
