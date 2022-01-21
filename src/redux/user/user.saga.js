import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import {
  auth,
  createUserAccount,
  getCurrentUser,
  googleProvider,
} from "../../firebase/firebase.utils";
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from "./user.action";
import userActionType from "./user.actionType";
import { firestore } from "../../firebase/firebase.utils";
import { selectCurrentUser } from "./user.selector";
import { selectCartItems } from "../cart/cart.selector";
import { addingCartToUserFailure } from "../cart/cart.action";

export function* signIn(user, additionalData) {
  try {
    const userRef = yield call(createUserAccount, user, additionalData);
    const snapshot = yield userRef.get();
    const userData = yield snapshot.data();
    yield put(
      signInSuccess({
        id: userRef.id,
        ...userData,
      })
    );
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* googleSignIn() {
  try {
    googleProvider.setCustomParameters({ prompt: "select_account" });
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield signIn(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* emailSignIn({ payload: { email, password } }) {
  try {
    yield console.log(email, password);
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield signIn(user);
  } catch (error) {
    yield console.log(error);
    yield put(signInFailure(error.message));
  }
}

export function* signout() {
  try {
    // try {
    // const id = yield selectCurrentUser;
    // yield console.log(id);
    //   const userDoc = firestore.collection("users").doc(selectCurrentUser.id);
    //   const items = selectCartItems;
    //   yield userDoc.set({ cartItems: items });
    // } catch (error) {
    //   yield put(addingCartToUserFailure(error));
    // }
    // yield console.log("In signout saga");
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const user = yield getCurrentUser();
    if (!user) {
      return;
    }
    yield signIn(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
    // yield signIn(user, { additionalData: { displayName } });
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield signIn(user, additionalData);
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionType.GOOGLE_SIGNIN_START, googleSignIn);
}
export function* onEmailSignInStart() {
  yield takeLatest(userActionType.EMAIL_SIGNIN_START, emailSignIn);
}
export function* onSignOutStart() {
  yield takeLatest(userActionType.SIGNOUT_START, signout);
}
export function* onCheckUserSession() {
  yield takeLatest(userActionType.CHECK_USER_SESSION, isUserAuthenticated);
}
export function* onSignUpStart() {
  yield takeLatest(userActionType.SIGNUP_START, signUp);
}
export function* onSignUPSuccess() {
  yield takeLatest(userActionType.SIGNUP_SUCCESS, signInAfterSignUp);
}

export function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUPSuccess),
  ]);
}
