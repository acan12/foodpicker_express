import { createStore, combineReducers, applyMiddleware } from "redux"
import logger from "redux-logger";
import thunk from "redux-thunk";
import merchantReducer from "./reducers/merchantReducer";


const store = createStore(combineReducers(
    { merchantReducer }),
    {},
    applyMiddleware(thunk, logger())
  );

export default store;
