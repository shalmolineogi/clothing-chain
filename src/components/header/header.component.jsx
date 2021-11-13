import React from "react";
import "./header.styles.scss";
// import { GiClothes } from "react-icons/gi";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assests/shopping-store.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ currentUser, hidden }) => (
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
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = (state) => {
  console.log(state);
  return {
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden,
  };
};

export default connect(mapStateToProps)(Header);
