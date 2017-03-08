const defaultState = {
  size: 1,
  alive: true
}
const playerState = (state=defaultState, action) => {
  switch (action.type) {
    case "SET_SIZE": {
      const size = action.payload
      state = {...state, size}
      break
    }
    case "DIE": {
      state = {...state, alive: false}
      break
    }
    default: {
      state = {...state}
    }
  }
  return state;
}

export default playerState
