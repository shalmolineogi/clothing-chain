import cartActionType from "./cart.actionType";

export const toggleCart = () => ({
  type: cartActionType.TOGGLE_CART_ONCLICK,
});

export const addItem = (item) => ({
  type: cartActionType.ADD_ITEM,
  payload: item,
});
