import userActionType from "./user.actionType";

const setCurrentUser = (user) => ({
  type: userActionType.SET_CURRENT_USER,
  payload: user,
});
export default setCurrentUser;
