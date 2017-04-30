import { createStore, combineReducers, applyMiddleware } from "redux"
import logger from "redux-logger";
import thunk from "redux-thunk";
import customerReducer from "./reducers/customerReducer";


const store = createStore(combineReducers(
    { customerReducer }),
    {},
    applyMiddleware(thunk, logger())
  );

export default store;
