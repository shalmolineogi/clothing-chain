import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import userActionType from "../user/user.actionType";
// import { firestore } from "../../firebase/firebase.utils";
import {
  // addingCartToUserFailure,
  clearCart,
} from "./cart.action";
// import { selectCurrentUser } from "../user/user.selector";
// import { selectCartItems } from "./cart.selector";

// export function* addCartItemsToUser() {
//   try {
//     const userDoc = firestore.collection("users").doc(selectCurrentUser.id);
//     yield userDoc.set({ cartItems: selectCartItems });
//     // yield put(clearCart());
//   } catch (error) {
//     yield put(addingCartToUserFailure(error));
//   }
// }
export function* clearCartOnSignOut() {
  // try {
  //   const userDoc = firestore.collection("users").doc(selectCurrentUser.id);
  //   yield userDoc.set({ cartItems: selectCartItems });
  yield put(clearCart());
  // } catch (error) {
  //   yield put(addingCartToUserFailure(error));
  // }
}

// export function* onSignOutStart() {
//   yield takeLatest(userActionType.SIGNOUT_START, addCartItemsToUser);
// }

export function* onSignOutSuccess() {
  yield takeLatest(userActionType.SIGNOUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSaga() {
  yield all([call(onSignOutSuccess)]);
}
