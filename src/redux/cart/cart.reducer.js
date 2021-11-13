import cartActionType from "./cart.actionType";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionType.TOGGLE_CART_ONCLICK:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
export default cartReducer;
