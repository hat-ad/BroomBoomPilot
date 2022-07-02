import { ADD_TOKEN, LOGOUT, UPDATE_USER } from "../actionTypes";

const INITIAL_STATE = {
  clientToken: "",
  user: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        ...state,
        clientToken: action.payload.clientToken,
        user: action.payload.user,
      };
    case LOGOUT:
      return { ...state, clientToken: "", user: "" };
    case UPDATE_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export default reducer;
