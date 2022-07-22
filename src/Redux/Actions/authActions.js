import Api from "../../Services";
import { ADD_TOKEN, LOGOUT, UPDATE_USER } from "../actionTypes";
import { store } from "../store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { notify } from "./notificationActions";

export const login = (payload) => {
  return {
    type: ADD_TOKEN,
    payload,
  };
};

export const logout = () => {
  console.log("logout");
  // AsyncStorage.clear();
  return {
    type: LOGOUT,
  };
};

export const updateUserDetails = (payload, showNotif = false) => {
  return async (dispatch) => {
    let obj = {};
    if (payload.city) obj.city = payload.city;
    try {
      const response = await Api.update("/pilot/update-pilot-details", payload);
      if (response.status === 1) {
        showNotif &&
          dispatch(notify({ type: "success", message: response.message }));
        dispatch(updateUser(response.data));
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      dispatch(notify({ type: "error", message: error.message }));
    }
  };
};

export const updateUser = (payload) => {
  return { type: UPDATE_USER, user: payload };
};

export const getUserDetails = () => {
  const token = store.getState().auth.clientToken;
  if (token) {
    return async (dispatch) => {
      try {
        const response = await Api.get("/pilot/get-user-details");
        if (response.status === 1) {
          dispatch(updateUser(response.data));
        } else {
          throw new Error(response.message);
        }
      } catch (error) {
        dispatch(notify({ type: "error", message: error.message }));
      }
    };
  }
  return;
};
