//seeds
import { seeds } from '../../../seeds';
import config from '../../../config';

let initialState = { data: seeds.foodplaces };

const foodplacesReducer = (state = initialState, action) => {
  switch (action.type){
    case config.ACTION_REFRESH_DATA_FOODPLACES:
      console.log("masuk reducer REFRESH_DATA");
      state = { data: state.data.concat([action.payload]) }
      break;

  }

  return state;
}

export default foodplacesReducer;
