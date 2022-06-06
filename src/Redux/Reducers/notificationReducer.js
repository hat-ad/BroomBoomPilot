import { NOTIFY, HIDE } from "../actionTypes";

const INITIAL_STATE = {
  message: "",
  isVisible: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOTIFY:
      return {
        ...state,
        message: action.message,
        isVisible: true,
      };
    case HIDE:
      return {
        message: "",
        type: "",
        isVisible: false,
      };
    default:
      return state;
  }
};

export default reducer;
