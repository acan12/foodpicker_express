let initialState = {
  value: 1,
  items: []
}

const merchantReducer = (state = initialState, action) => {

  switch (action.type){
    case "FETCH_ALL":
      state = Object.assign({}, state, {
        value: state.value + action.value,
        name: action.name,
        address: action.address
      })
      console.log("masuk fetch all")
      break;

    case "GET_ALL_DATA":
      state = Object.assign({}, state, { items: action.payload });
      break;

  }

  return state;
}

export default merchantReducer;
