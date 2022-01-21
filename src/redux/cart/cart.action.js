import cartActionType from "./cart.actionType";

export const toggleCart = () => ({
  type: cartActionType.TOGGLE_CART_ONCLICK,
});

export const addItem = (item) => ({
  type: cartActionType.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: cartActionType.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionType.REMOVE_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: cartActionType.CLEAR_CART,
});

export const initializeCart = (items) => ({
  type: cartActionType.INITIALIZE_CART,
  payload: items,
});

export const addingCartToUserFailure = (error) => ({
  type: cartActionType.ADDING_CART_TO_USER_FAILURE,
  payload: error,
});
