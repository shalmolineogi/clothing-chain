import { connect } from "react-redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsFetching } from "../../redux/shop/shop.selector";
import CollectionOverview from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching,
});

const CollectionContainerOverview = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionContainerOverview;
