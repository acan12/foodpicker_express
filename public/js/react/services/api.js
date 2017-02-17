import axios from 'axios'


export function callApi(url, methodType, paramsValue, action, dispatch) {
  console.log(paramsValue)
  axios({
    method: methodType,
    url: url,
    params: paramsValue,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
  })
  .then((response) => {
    if(Array.isArray(response.data)){
      action["payload"] = response.data
    }else{
      action["payload"] = [response.data]
    }
    dispatch(action)
  })
  .catch((err) => {
    console.log('error!')
  })
}
