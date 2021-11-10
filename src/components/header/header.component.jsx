import React from "react";
import "./header.styles.scss";
import { GiClothes } from "react-icons/gi";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <div className="logo-container">
      <GiClothes />
    </div>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className="option" to="/signIn">
          Sign In
        </Link>
      )}
    </div>
  </div>
);
export default Header;
