import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'

//TODO Point entry back at APP before merge to master
import Lobby from './components/Lobby.jsx'

const players = ["Dane", "Cole"]

ReactDOM.render(
  <Lobby roomCode={"HOLA"} leader={false} players={players}/>,
  document.getElementById('root')
);
