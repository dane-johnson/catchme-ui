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
      },
      geo: {
        boned: true,
        position: null
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

  describe('geo', () => {
    it('should handle UNBONE', () => {
      expect(
        reducer({}, {
          type: "UNBONE"
        }).geo
      ).toEqual(expect.objectContaining({
        boned: false
      }))
    })
    it('should handle POSITION_CHANGED', () => {
      expect(
        reducer({}, {
          type: "POSITION_CHANGED",
          payload: {
            coords: {
              longitude: 3.14,
              latitude: 1.59
            },
            timestamp: 1000
          }
        }).geo
      ).toEqual(expect.objectContaining({
        position: {
          coords: {
            longitude: 3.14,
            latitude: 1.59
          },
          timestamp: 1000
        }
      }))
    })
  })
})
