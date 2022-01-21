import React from "react";
import "./shoppage.styles.scss";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchShopdataStart } from "../../redux/shop/shop.action";
import CollectionContainerOverview from "../../components/collection-overview/collection-overview.container";
import CollectionContainer from "../collection/collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchShopData } = this.props;
    fetchShopData();
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shoppage">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionContainerOverview}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchShopData: () => dispatch(fetchShopdataStart()),
});
export default connect(null, mapDispatchToProps)(ShopPage);
