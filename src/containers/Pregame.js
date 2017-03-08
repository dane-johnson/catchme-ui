import React from 'react'
import { connect } from 'react-redux'

import { switchContext, joinGame } from '../actions'

import Join from '../components/Join'

const attemptJoin = (username, roomCode, dispatch) => {
  //TODO Add call to socket
  dispatch(joinGame(username, roomCode))
  dispatch(switchContext("INGAME"))
}

const Pregame = ({ dispatch }) => (
  <Join
    onSubmit={(username, roomCode) => {
      attemptJoin(username, roomCode, dispatch)
    }}
  />
)

export default connect()(Pregame)
