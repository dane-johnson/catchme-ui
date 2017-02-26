const defaultState = {
  context: 'PRE_GAME'
}
const reducer = (state=defaultState, action) => {
  switch (action.type) {
    case "SWITCH_CONTEXT": {
      state = {...state, context: action.payload}
      break;
    }
    default: {
      state = {...state}
    }
  }
  return state;
}

export default reducer;
