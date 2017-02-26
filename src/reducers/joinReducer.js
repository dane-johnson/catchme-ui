const defaultState = {
  joined: false,
  leader: false,
  username: "",
  roomCode: ""
}

const joinState = (state=defaultState, action) => {
  switch (action.type) {
    case "JOIN_ROOM": {
      state = {
        ...state,
        joined: true,
        username: action.payload.username,
        roomCode: action.payload.roomCode
      }
      break;
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
