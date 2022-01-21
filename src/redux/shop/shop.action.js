import ShopActionType from "./shop.actionType";

export const fetchShopdataStart = () => ({
  type: ShopActionType.FETCH_SHOPDATA_START,
});

export const fetchShopdataSuccess = (collections) => ({
  type: ShopActionType.FETCH_SHOPDATA_SUCCESS,
  payload: collections,
});
export const fetchShopdataFailure = (errorMessege) => ({
  type: ShopActionType.FETCH_SHOPDATA_FAILURE,
  payload: errorMessege,
});
