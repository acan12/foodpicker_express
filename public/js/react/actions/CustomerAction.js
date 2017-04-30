import { callApi } from "../services/api"

export function getListAction() {
  var url = "http://localhost:3000/api/tasks"

  const actionRefresh = {
    type: 'REFRESH_DATA',
    payload: {
      id: 12,
      name: 'Anonymous',
      address: 'Jakarta',
      phone: '021-56578687'
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
