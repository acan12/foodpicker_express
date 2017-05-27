import { callApi } from "../services/api";
import config from "../../../config";

export function showLoading(show) {
  return {
    type: 'LOADING',
    isLoading: show,
  }
}

export function getPlacesAction() {
  var url = "http://localhost:3000/api/tasks"

  const actionRefresh = {
    type: config.ACTION_REFRESH_DATA_FOODPLACES,
    payload: {
      id: 12,
      name: 'Puri Kembangan Seafood',
    },
  }


  // callApi(
  //   url,
  //   'GET',
  //   {},
  //   action,
  //   dispatch
  // )

  return actionRefresh;
}
