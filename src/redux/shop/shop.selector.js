import { createSelector } from "reselect";
import memoize from "lodash.memoize";
const selectShop = (state) => state.shop;

export const selectShopData = createSelector(
  [selectShop],
  (shop) => shop.shopData
);

export const selectShopItems = memoize((collectionId) =>
  createSelector([selectShopData], (shopData) => shopData[collectionId])
);

export const selectCollectionsForPreview = createSelector(
  [selectShopData],
  (collections) => Object.keys(collections).map((key) => collections[key])
);
