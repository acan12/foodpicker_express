import { createStore, combineReducers, applyMiddleware } from "redux"
import logger from "redux-logger";
import thunk from "redux-thunk";
import customerReducer from "./reducers/customerReducer";
import loadingReducer from "./reducers/loadingReducer";


const store = createStore(combineReducers(
    { customerReducer, loadingReducer }),
    {},
    applyMiddleware(thunk, logger())
  );

export default store;
