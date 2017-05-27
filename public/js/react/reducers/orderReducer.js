//seeds
import { seeds } from '../../../seeds';
import config from '../../../config';

let initialState = { data: seeds.orders };

const orderReducer = (state = initialState, action) => {
  switch (action.type){
    case config.ACTION_REFRESH_DATA_ORDERS:
      console.log("masuk reducer REFRESH_DATA_ORDER")
      state = { data: state.data.concat([action.payload]) }
      break;

    case "GET_ALL_DATA_ORDER":
      state = Object.assign({}, state, { payload: action.payload });
      console.log("masuk reducer GET_ALL_DATA")
      break;

  }

  return state;
}

export default orderReducer;
