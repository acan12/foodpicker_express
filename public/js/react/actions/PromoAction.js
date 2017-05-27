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
    type: config.ACTION_REFRESH_DATA_PROMO,
    payload: {
      id: 99,
      title: 'Anonymous',
      content: '50% Off for Today',
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
