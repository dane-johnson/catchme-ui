import React from 'react'
import { PageHeader } from 'react-bootstrap'

const Lobby = ({room_code}) => (
  <div>
    <PageHeader>You are in lobby {room_code}</PageHeader>
  </div>
)

export default Lobby
