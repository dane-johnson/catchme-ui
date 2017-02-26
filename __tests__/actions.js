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

  it('creates an action to join a game', () => {
    const username = "Donnie"
    const roomCode = "DARK"
    const expected = {
      type: "JOIN_ROOM",
      payload: {username, roomCode}
    }

    expect(actions.joinGame(username, roomCode)).toEqual(expected);
  })

  it('creates an action to promote the player', () => {
    const expected = {
      type: "PROMOTE"
    }

    expect(actions.promote()).toEqual(expected);
  })
})
