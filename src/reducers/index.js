import { combineReducers } from 'redux'
import context from './contextReducer'
import joinState from './joinReducer'

const reducer = combineReducers({
  context,
  joinState
})

export default reducer;
