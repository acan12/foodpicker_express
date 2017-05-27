//seeds
import { seeds } from '../../../seeds';
import config from '../../../config';

let initialState = { data: seeds.promos };

const promoReducer = (state = initialState, action) => {
  switch (action.type){
    case config.ACTION_REFRESH_DATA_PROMO:
      console.log("masuk reducer REFRESH_DATA")
      state = { data: state.data.concat([action.payload]) }
      break;

    case "GET_ALL_DATA":
      state = Object.assign({}, state, { payload: action.payload });
      console.log("masuk reducer GET_ALL_DATA")
      break;

  }

  return state;
}

export default promoReducer;
