import reducer from '../src/reducers'

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      context: 'WELCOME',
      joinState: {
        joined: false,
        username: "",
        roomCode: ""
      },
      geo: {
        boned: true,
        position: null
      },
      playerState: {
        size: 1,
        alive: true
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

  describe('playerState', () => {
    it('should handle SET_SIZE', () => {
      const size = 2
      expect(
        reducer({}, {
          type: "SET_SIZE",
          payload: size
        }).playerState
      ).toEqual(expect.objectContaining({size}))
    })
    it('should handle DIE', () => {
      expect(
        reducer({}, {
          type: "DIE"
        }).playerState
      ).toEqual(expect.objectContaining({alive: false}))
    })
  })
})
