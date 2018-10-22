export default function reducer(state={
    fetching: false,
    fetched: false,
    businessDetails: [],
    error: null,  
  }, action){
  switch (action.type) {
    case 'FETCH_BUSINESSES': {
      return { ...state, fetching: true }
    }
    case 'RECEIVED_INFORMATION': {
      return { ...state, fetching: false, fetched: true, businessDetails: action.payload }
    }
    case 'ERROR': {
      return { ...state, fetching: false, fetched: true, error: true }
    }
    default:
      return state
  }
}