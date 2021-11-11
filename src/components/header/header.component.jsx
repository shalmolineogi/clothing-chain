import React from "react";
import "./header.styles.scss";
// import { GiClothes } from "react-icons/gi";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assests/shopping-store.svg";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      {currentUser ? (
        <Link className="option" onClick={() => auth.signOut()} to="/signIn">
          Sign Out
        </Link>
      ) : (
        <Link className="option" to="/signIn">
          Sign In
        </Link>
      )}
    </div>
  </div>
);
export default Header;
