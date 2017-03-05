import { combineReducers } from 'redux'
import context from './contextReducer'
import joinState from './joinReducer'
import geo from './geoReducer'
import ingame from './ingameReducer'

const reducer = combineReducers({
  context,
  joinState,
  geo,
  ingame
})

export default reducer;
