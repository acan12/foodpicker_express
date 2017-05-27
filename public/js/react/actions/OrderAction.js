import { callApi } from "../services/api";
import config from "../../../config";

export function showLoading(show) {
  return {
    type: 'LOADING',
    isLoading: show,
  }
}

export function getListAction() {
  var url = "http://localhost:3000/api/tasks"

  const actionRefresh = {
    type: config.ACTION_REFRESH_DATA_ORDERS,
    payload: {
      id: 12,
      caption: 'Anonymous',
      transaction: '2017-07-12',
      customer: 'A+',
    },
  }

  console.log('host config:', config.api.host);
  // callApi(
  //   url,
  //   'GET',
  //   {},
  //   action,
  //   dispatch
  // )

  return actionRefresh;
}

export function addItemAction(params, dispatch) {
  var url = "http://localhost:3000/api/tasks"
  var action = { type: "GET_ALL_DATA" }

  callApi(
    url,
    'POST',
    params,
    action,
    dispatch
  )
}
