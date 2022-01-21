import userActionType from "./user.actionType";

export const checkUserSession = () => ({
  type: userActionType.CHECK_USER_SESSION,
});

export const googleSignInStart = () => ({
  type: userActionType.GOOGLE_SIGNIN_START,
});
export const emailSignInStart = (emailAndPassword) => ({
  type: userActionType.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});
export const signInSuccess = (user) => ({
  type: userActionType.SIGNIN_SUCCESS,
  payload: user,
});
export const signInFailure = (error) => ({
  type: userActionType.SIGNIN_FAILURE,
  payload: error,
});
export const signOutStart = () => ({
  type: userActionType.SIGNOUT_START,
});
export const signOutSuccess = () => ({
  type: userActionType.SIGNOUT_SUCCESS,
});
export const signOutFailure = (error) => ({
  type: userActionType.SIGNOUT_FAILURE,
  payload: error,
});
export const signUpStart = (userCredentials) => ({
  type: userActionType.SIGNUP_START,
  payload: userCredentials,
});
export const signUpSuccess = ({ user, additionalData }) => ({
  type: userActionType.SIGNUP_SUCCESS,
  payload: { user, additionalData },
});
export const signUpFailure = (error) => ({
  type: userActionType.SIGNUP_FAILURE,
  payload: error,
});
