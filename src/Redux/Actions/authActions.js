import Api from "../../Services";
import { ADD_TOKEN, LOGOUT } from "../actionTypes";
import { store } from "../store";
import { notify } from "./notificationActions";

export const login = (payload) => {
  return {
    type: ADD_TOKEN,
    payload,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
