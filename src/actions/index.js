export const switchContext = (context) => ({
  type: "SWITCH_CONTEXT",
  payload: context
});

export const joinGame = (username, roomCode) => ({
  type: "JOIN_ROOM",
  payload: {username, roomCode}
});

export const unbone = () => ({
  type: "UNBONE"
})

export const updatePosition = (position) => ({
  type: "POSITION_CHANGED",
  payload: position
})

export const setSize = (size) => ({
  type: "SET_SIZE",
  payload: size
})

export const die = () => ({
  type: "DIE"
})
