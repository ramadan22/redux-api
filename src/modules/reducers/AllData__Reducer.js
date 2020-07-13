import { combineReducers } from 'redux'
const initialState = {
  data: [],
  dataBanner: []
}
const AllData = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_ALL_DATA":
      return {
        ...state,
        data: {...action.load.data}
      }
    case "SHOW_BANNER":
      return {
        ...state,
        dataBanner: {...action.load.data}
      }
    default:
      return state
  }
}

export default AllData

export const rootReducers = combineReducers({
  AllData
})