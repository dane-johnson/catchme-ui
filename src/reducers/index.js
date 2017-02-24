const defaultState = {
  context: 'SPLASH'
}
const reducer = (state=defaultState, action) => {
  switch (action.type) {
    case "SWITCH_CONTEXT": {
      state = {...state, context: action.payload}
      break;
    }
  }
  return state;
}

export default reducer;
