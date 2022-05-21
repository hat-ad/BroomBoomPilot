import { ADD_TOKEN, LOGOUT } from "../actionTypes";

const INITIAL_STATE = {
  clientToken: "",
  user: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        ...state,
        clientToken: action.clientToken,
        user: action.user,
      };
    case LOGOUT:
      return { ...state, clientToken: "", user: "" };
    default:
      return state;
  }
};

export default reducer;
