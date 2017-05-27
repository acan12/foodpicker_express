import { createStore, combineReducers, applyMiddleware } from "redux"
import logger from "redux-logger";
import thunk from "redux-thunk";

import loadingReducer from "./reducers/loadingReducer";

import customerReducer from "./reducers/customerReducer";
import foodplacesReducer from "./reducers/foodplacesReducer";
import orderReducer from "./reducers/orderReducer";
import promoReducer from "./reducers/promoReducer";


const store = createStore(combineReducers(
    { loadingReducer,
      customerReducer, foodplacesReducer, orderReducer, promoReducer }),
    {},
    applyMiddleware(thunk, logger())
  );

export default store;
