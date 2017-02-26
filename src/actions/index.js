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
