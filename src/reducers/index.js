import { combineReducers } from 'redux'
import context from './contextReducer'
import joinState from './joinReducer'
import geo from './geoReducer'
import playerState from './ingameReducer'

const reducer = combineReducers({
  context,
  joinState,
  geo,
  playerState
})

export default reducer;
