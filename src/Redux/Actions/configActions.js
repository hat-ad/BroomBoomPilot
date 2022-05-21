import { POP_REQUEST, PUSH_REQUEST } from "../actionTypes";
import { store } from "../store";

export const pushRequest = (request) => {
  const spinner = store.getState().config.spinner;
  spinner.push(request);
  return {
    type: PUSH_REQUEST,
    request: spinner,
  };
};

export const popRequest = () => {
  const spinner = [...store.getState().config.spinner];
  spinner.pop();

  return {
    type: POP_REQUEST,
    request: spinner,
  };
};
