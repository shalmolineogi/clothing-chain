import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

const CollectionItem = ({ item, addItem }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    />
    <div className="collection-footer">
      <div className="name">{item.name}</div>
      <div className="price">${item.price}</div>
    </div>
    <CustomButton inverted onClick={() => addItem(item)}>
      Add To Cart
    </CustomButton>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
