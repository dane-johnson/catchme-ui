const defaultState = {
  joined: false,
  leader: false,
  roomCode: ""
}

const joinState = (state=defaultState, action) => {
  switch (action.type) {
    case "JOIN_ROOM": {
      state = {...state, joined: true, roomCode: action.payload}
      break
    }
    case "PROMOTE": {
      state = {...state, leader: true}
      break
    }
    default: {
      state = {...state}
    }
  }

  return state;
}

export default joinState;
