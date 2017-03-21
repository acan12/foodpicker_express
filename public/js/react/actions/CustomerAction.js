import { callApi } from "../services/api"

export function getListAction(dispatch) {
  var url = "http://localhost:3000/api/tasks"
  var action = { type: "GET_ALL_DATA" }

  callApi(
    url,
    'GET',
    {},
    action,
    dispatch
  )
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
