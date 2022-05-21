import { NOTIFY } from "../actionTypes";

const INITIAL_STATE = {
  message: "",
  type: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOTIFY:
      return {
        ...state,
        message: action.message,
        type: action.type,
      };
    default:
      return state;
  }
};

export default reducer;
