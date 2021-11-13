import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectTotalItemPrice,
} from "../../redux/cart/cart.selector";
import "./checkoutpage.styles.scss";

const CheckOutPage = ({ totalPrice, cartItems }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">Product</div>
      <div className="header-block">Description</div>
      <div className="header-block">Quantity</div>
      <div className="header-block">Price</div>
      <div className="header-block">Remove</div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">Total = ${totalPrice}</div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  totalPrice: selectTotalItemPrice,
  cartItems: selectCartItems,
});
export default connect(mapStateToProps)(CheckOutPage);
