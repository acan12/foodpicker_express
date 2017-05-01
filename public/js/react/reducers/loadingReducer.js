let initialState = { isLoading: false }

const loadingReducer = (state = initialState, action) => {
  switch(action.type){
    case "LOADING":
      state = { isLoading: action.isLoading }
      break;
  }

  return state;
}

export default loadingReducer;
