import {
  CAMERA_CAPTURE_FAILURE,
  CAMERA_CAPTURE_RESET,
  CAMERA_CAPTURE_SUCCESS,
  MEDIA_UPLOAD_LOADER,
} from "../actionTypes";
import { notify } from "./notificationActions";
import Axios from "axios";

export const captureSuccess = (payload) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("file", {
        name: new Date().getTime() + "_camera.jpg",
        uri: payload.uri,
        type: "image/jpeg",
      });
      try {
        const res = await Axios.post(
          "http://3.110.168.181:7000/api/v1/upload/single",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        dispatch({
          type: CAMERA_CAPTURE_SUCCESS,
          payload: res.data.data,
        });
        dispatch(mediaUploadLoader(false));
      } catch (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      dispatch(
        notify({
          message: "Error uploading document",
          type: "error",
        })
      );
      dispatch(mediaUploadLoader(false));
      dispatch({
        type: CAMERA_CAPTURE_FAILURE,
        payload: null,
      });
    }
  };
};

export const captureFailure = () => {
  return {
    type: CAMERA_CAPTURE_FAILURE,
    payload: null,
  };
};

export const captureReset = () => {
  return {
    type: CAMERA_CAPTURE_RESET,
    payload: null,
  };
};

export const mediaUploadLoader = (payload) => {
  return {
    type: MEDIA_UPLOAD_LOADER,
    payload,
  };
};
