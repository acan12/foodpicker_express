import { createStore, combineReducers, applyMiddleware } from "redux"
import logger from "redux-logger";
import thunk from "redux-thunk";
import loadingReducer from "./reducers/loadingReducer";
import customerReducer from "./reducers/customerReducer";
import foodplacesReducer from "./reducers/foodplacesReducer";


const store = createStore(combineReducers(
    { customerReducer, loadingReducer, foodplacesReducer }),
    {},
    applyMiddleware(thunk, logger())
  );

export default store;
