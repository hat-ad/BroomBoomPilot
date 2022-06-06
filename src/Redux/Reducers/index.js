import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistCombineReducers } from "redux-persist";

import authReducer from "./authReducer";
import notificationReducer from "./notificationReducer";
import configReducer from "./configReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth"],
};

const rootReducer = persistCombineReducers(persistConfig, {
  auth: authReducer,
  notification: notificationReducer,
  config: configReducer,
});

export default rootReducer;
