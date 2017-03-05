const defaultState = {
  position: null,
  boned: true
}
const geo = (state=defaultState, action) => {
  switch(action.type) {
    case "UNBONE": {
      state = {...state, boned: false}
      break;
    }
    case "POSITION_CHANGED": {
      const position = action.payload
      state = {...state, position}
      break;
    }
    default: {
      state = {...state}
    }
  }
  return state
}

export default geo;
