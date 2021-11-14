import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import CollectionPreview from "../collection-preview/collection-preview.component";
import "./collection-overview.component";

const CollectionOverview = ({ shopData }) => (
  <div className="collection-overview">
    {shopData.map(({ id, ...otherShopDataProps }) => (
      <CollectionPreview key={id} {...otherShopDataProps} />
    ))}
  </div>
);
const mapStateToProps = createStructuredSelector({
  shopData: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
