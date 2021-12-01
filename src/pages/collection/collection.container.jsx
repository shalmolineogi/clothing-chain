import { compose } from "redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import Collection from "./collection.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsFetchingForCollection } from "../../redux/shop/shop.selector";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsFetchingForCollection(state),
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionContainer;
