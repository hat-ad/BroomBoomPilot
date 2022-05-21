import { POP_REQUEST, PUSH_REQUEST } from "../actionTypes";

const INITIAL_STATE = {
  spinner: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PUSH_REQUEST:
      return {
        ...state,
        spinner: action.request,
      };
    case POP_REQUEST:
      return {
        ...state,
        spinner: action.request,
      };

    default:
      return state;
  }
};

export default reducer;
