let initialState = [
  {
    id: '100',
    name: 'myname',
    address: 'myaddress',
    phone: 'myphone'
  }
]

const customerReducer = (state = initialState, action) => {
  console.log('enter reducer')
  switch (action.type){
    case "REFRESH_DATA":
      console.log("masuk reducer LOAD_DATA")
      state = state.concat([action.payload])
      break;

    case "GET_ALL_DATA":
      state = Object.assign({}, state, { payload: action.payload });
      console.log("masuk reducer GET_ALL_DATA")
      break;

  }

  return state;
}

export default customerReducer;
