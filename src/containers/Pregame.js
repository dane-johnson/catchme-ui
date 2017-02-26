import React from 'react'
import { connect } from 'react-redux'

import { joinGame, promote } from '../actions'

import Join from '../components/Join'
import Lobby from '../components/Lobby'

const Pregame = ({ joinState, dispatch }) => {
  if (!joinState.joined) {
    return (
      <Join
      onSubmit={(username, roomCode) => {
        attemptJoin(username, roomCode, dispatch)
      }}
    />
  )
  } else {
    return <Lobby
      roomCode={joinState.roomCode}
      leader={joinState.leader}
      players={[]}
    />
  }
}

const attemptJoin = (username, roomCode, dispatch) => {
  //TODO Add call to socket
  dispatch(joinGame(username, roomCode))
  dispatch(promote())
}

const mapStateToProps = (state) => ({
  joinState: state.joinState
})

export default connect(mapStateToProps)(Pregame)
