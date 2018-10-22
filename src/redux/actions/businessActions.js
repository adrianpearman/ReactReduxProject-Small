import axios from 'axios'

export function getBusinessData(){
  return async (dispatch) => {
    dispatch({ type: 'FETCH_BUSINESSES'})
    await axios.get('https://api.myjson.com/bins/87ohp')
      .then((res) => {
        // console.log(res.data.places)
        return dispatch({ type: 'RECEIVED_INFORMATION', payload: res.data.places })  
      })
      .catch((err) => {
        return dispatch({ type: 'FETCH_USERS_ERROR', payload: err })
      })
  }
}
