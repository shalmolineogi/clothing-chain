import React from "react";
import "./cart-item.styles.scss";
import { connect } from "react-redux";

const CartItem = ({ item }) => (
  <div className="cart-item">
    <img src={item.imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{item.name}</span>
      <span className="name">
        {item.quantity}x${item.price}
      </span>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});
export default connect(mapStateToProps)(CartItem);
