import React from "react";
import "./collection.styles.scss";
import { selectShopItems } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";
import CollectionItem from "../collection-item/collection-item.component";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection">
      <div className="title">{title}</div>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopItems(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(Collection);
