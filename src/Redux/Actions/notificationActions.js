import { NOTIFY } from "../actionTypes";

export const notify = (payload) => {
  return {
    type: NOTIFY,
    message: payload.message,
    type: payload.type,
  };
};
