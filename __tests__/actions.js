import * as actions from '../src/actions'

describe('actions', () => {
  it('creates an action to switch the context', () => {
    const context = "DEFCON_5"
    const expected = {
      type: "SWITCH_CONTEXT",
      payload: context
    };
    expect(actions.switchContext(context)).toEqual(expected);
  });

  it('creates an action to join a room', () => {
    const username = "Donnie"
    const roomCode = "DARK"
    const expected = {
      type: "JOIN_ROOM",
      payload: {username, roomCode}
    }
    expect(actions.joinGame(username, roomCode)).toEqual(expected);
  })

  it('creates an action to set size', () => {
    const size = 2
    const expected = {
      type: 'SET_SIZE',
      payload: size
    }
    expect(actions.setSize(size)).toEqual(expected);
  })
  it('creates an action to die', () => {
    const expected = {
      type: 'DIE'
    }
    expect(actions.die()).toEqual(expected)
  })
  it('creates an action to unbone', () => {
    const expected = {
      type: 'UNBONE'
    }
    expect(actions.unbone()).toEqual(expected)
  })
  it('creates an action to change the position', () => {
    const position = {longitude: 6.9, latitude: 9.6}
    const expected = {
      type: 'POSITION_CHANGED',
      payload: position
    }
    expect(actions.updatePosition(position)).toEqual(expected)
  })
})
