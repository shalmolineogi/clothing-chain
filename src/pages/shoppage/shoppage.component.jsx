import React from "react";
import { CollectionPreview } from "../../components/collection-preview/collection-preview.component";
import "./shoppage.styles.scss";
import SHOP_DATA from "../../assests/shop-data.js";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopData: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shoppage">
        {this.state.shopData.map(({ id, ...otherShopProps }) => (
          <CollectionPreview key={id} {...otherShopProps} />
        ))}
      </div>
    );
  }
}
export default ShopPage;
