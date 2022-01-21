import cartActionType from "./cart.actionType";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
  cartAddToUserError: null,
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
    case cartActionType.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case cartActionType.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case cartActionType.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case cartActionType.INITIALIZE_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case cartActionType.ADDING_CART_TO_USER_FAILURE:
      return {
        ...state,
        cartAddToUserError: action.payload,
      };
    default:
      return state;
  }
};
export default cartReducer;
