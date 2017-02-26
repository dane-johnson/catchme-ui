import reducer from '../src/reducers'

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      context: 'WELCOME',
      joinState: {
        joined: false,
        leader: false,
        username: "",
        roomCode: ""
      }
    })
  })

  describe('context', () => {
    it('should handle SWITCH_CONTEXT', () => {
      expect(
        reducer({}, {
          type: "SWITCH_CONTEXT",
          payload: "DEFCON_5"
        }).context
      ).toEqual("DEFCON_5")
    })
  })

  describe('joinState', () => {
    it('should handle JOIN_ROOM', () => {
      expect(
        reducer({}, {
          type: "JOIN_ROOM",
          payload: {
            username: "Donnie",
            roomCode: "DARK"
          }
        }).joinState
      ).toEqual(expect.objectContaining({
        joined: true,
        username: "Donnie",
        roomCode: "DARK"
      }))
    })
    it('should handle PROMOTE', () => {
      expect(
        reducer({}, {
          type: "PROMOTE"
        }).joinState
      ).toEqual(expect.objectContaining({
        leader: true
      }))
    })
  })
})
