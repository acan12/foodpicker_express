//seeds
import { seeds } from '../../../seeds';

let initialState = { data: seeds.customers };

const customerReducer = (state = initialState, action) => {
  switch (action.type){
    case "REFRESH_DATA":
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

export default customerReducer;
