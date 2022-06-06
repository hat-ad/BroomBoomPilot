import { HIDE, NOTIFY } from "../actionTypes";

export const notify = (payload) => {
  return {
    type: NOTIFY,
    message: payload.message,
  };
};

export const hide = () => {
  return {
    type: HIDE,
  };
};
