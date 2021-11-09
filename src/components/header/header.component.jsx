import React from "react";
import "./header.styles.scss";
import { GiClothes } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Header = () => (
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
      <Link className="option" to="/signIn">
        Sign Out
      </Link>
    </div>
  </div>
);
