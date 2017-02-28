const defaultState = 'INGAME'
const context = (state=defaultState, action) => {
  switch (action.type) {
    case "SWITCH_CONTEXT": {
      state = action.payload
      break;
    }
    default: {
      break;
    }
  }
  return state;
}

export default context;
