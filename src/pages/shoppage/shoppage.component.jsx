import React from "react";
import "./shoppage.styles.scss";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../collection/collection.component";
import { retrieveShopData, firestore } from "../../firebase/firebase.utils.js";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { updateShopData } from "../../redux/shop/shop.action";

const WithSpinnerCollectionOverview = WithSpinner(CollectionOverview);
const WithSpinnerCollection = WithSpinner(Collection);
class ShopPage extends React.Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    const { fetchShopData } = this.props;
    const collRef = firestore.collection("collections");
    collRef.onSnapshot((snapshot) => {
      console.log(snapshot);
      const convertSnapshotToShopData = retrieveShopData(snapshot);
      fetchShopData(convertSnapshotToShopData);
      this.setState({ loading: false });
    });

    // const data = fetchShopData();
    // console.log(data);
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shoppage">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <WithSpinnerCollectionOverview isLoading={loading} {...props} />
          )}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <WithSpinnerCollection isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchShopData: (collection) => dispatch(updateShopData(collection)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
