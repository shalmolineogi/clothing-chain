import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.action";
import { selectTotalItemCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCart, count }) => (
  <div className="cart-icon">
    <ShoppingCart className="shopping-icon" onClick={() => toggleCart()} />

    <span className="item-count">{count}</span>
  </div>
);

const mapStateToProps = createStructuredSelector({
  count: selectTotalItemCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
