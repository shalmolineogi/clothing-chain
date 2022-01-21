import ShopActionType from "./shop.actionType";

const INITIAL_STATE = {
  shopData: null,
  isFetching: false,
  errorMessege: undefined,
};
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionType.FETCH_SHOPDATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case ShopActionType.FETCH_SHOPDATA_SUCCESS:
      return {
        ...state,
        shopData: action.payload,
        isFetching: false,
      };
    case ShopActionType.FETCH_SHOPDATA_FAILURE:
      return {
        ...state,
        errorMessege: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};
export default shopReducer;
