import React from "react";
import "./shoppage.styles.scss";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../../components/collection/collection.component";

const ShopPage = ({ match }) => (
  <div className="shoppage">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default ShopPage;
