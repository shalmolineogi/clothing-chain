import ShopActionType from "./shop.actionType";

const INITIAL_STATE = {
  shopData: null,
};
const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionType.UPDATE_SHOPDATA:
      return {
        ...state,
        shopData: action.payload,
      };
    default:
      return state;
  }
};
export default shopReducer;
