import React from 'react'
import { Button } from 'react-bootstrap'

import '../css/position.css'
import '../css/playerlist.css'

const Lobby = ({roomCode, leader, players, onStart}) => {
  const playerList = players.map(player => <div key={player} className="playerListItem">{player}</div>);
  return (
    <div className="centered">
      <h2>You are in lobby <br/> <strong>{roomCode}</strong></h2>
      {leader &&
        <h2>You are the leader</h2>
      }
      <h4>Players in lobby:</h4>
      <div className="playerList">
        {playerList}
      </div>
      <div className="footer">
      {leader && //XXX: set minimum to 1 for release
        <Button bsStyle="primary" disabled={players.length < 0} onClick={onStart}>Start Game</Button>
      }
      {!leader &&
        <h4>Waiting for leader to start game.</h4>
      }
      </div>
    </div>
  )
}

export default Lobby
