import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./Reducers";
import loggerMiddleware from "./Middlewares/logger";

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);

const store = createStore(rootReducer, undefined, middlewareEnhancer);
const persistor = persistStore(store);

export { store, persistor };
