import {
  CAMERA_CAPTURE_FAILURE,
  CAMERA_CAPTURE_RESET,
  CAMERA_CAPTURE_SUCCESS,
  MEDIA_UPLOAD_LOADER,
} from "../actionTypes";

const INITIAL_STATE = {
  data: null,
  isLoading: false,
  error: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CAMERA_CAPTURE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
      };
    case CAMERA_CAPTURE_FAILURE:
      return {
        ...state,
        data: null,
        error: true,
      };
    case CAMERA_CAPTURE_RESET:
      return {
        ...state,
        data: null,
        error: false,
      };
    case MEDIA_UPLOAD_LOADER:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
