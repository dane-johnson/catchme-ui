import { combineReducers } from 'redux'
import context from './contextReducer'
import joinState from './joinReducer'
import geo from './geoReducer'

const reducer = combineReducers({
  context,
  joinState,
  geo
})

export default reducer;
