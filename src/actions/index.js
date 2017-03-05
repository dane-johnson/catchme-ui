export const switchContext = (context) => ({
  type: "SWITCH_CONTEXT",
  payload: context
});

export const joinGame = (username, roomCode) => ({
  type: "JOIN_ROOM",
  payload: {username, roomCode}
});

export const promote = () => ({
  type: "PROMOTE"
})

export const unbone = () => ({
  type: "UNBONE"
})

export const updatePosition = (position) => ({
  type: "POSITION_CHANGED",
  payload: position
})

export const setTarget = (target) => ({
  type: 'SET_TARGET',
  payload: target
})

export const addFeedEvent = (event) => ({
  type: 'ADD_FEED_EVENT',
  payload: event
})
