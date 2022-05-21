import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistCombineReducers } from "redux-persist";

import authReducer from "./authReducer";
import notificationReducer from "./notificationReducer";
import configReducer from "./configReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const rootReducer = persistCombineReducers(persistConfig, {
  auth: authReducer,
  notification: notificationReducer,
  config: configReducer,
});

export default rootReducer;
