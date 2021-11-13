import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectTotalItemCount = createSelector([selectCartItems], (items) =>
  items.reduce((acc, curr) => acc + curr.quantity, 0)
);

export const selectTotalItemPrice = createSelector([selectCartItems], (items) =>
  items.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
);
