import userActionType from "./user.actionType";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionType.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case userActionType.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case userActionType.SIGNIN_FAILURE:
    case userActionType.SIGNOUT_FAILURE:
    case userActionType.SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
