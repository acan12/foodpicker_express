//seeds
import { seeds } from '../../../seeds';

let initialState = { data: seeds.places };

const foodplacesReducer = (state = initialState, action) => {
  switch (action.type){
    case "REFRESH_PLACES_DATA":
      console.log("masuk reducer REFRESH_DATA")
      state = { data: state.data.concat([action.payload]) }
      break;

  }

  return state;
}

export default foodplacesReducer;
