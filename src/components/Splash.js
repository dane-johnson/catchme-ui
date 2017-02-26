import React from 'react'
import { PageHeader, Button } from 'react-bootstrap'

import '../css/position.css'

const Splash = ({onJoin}) => (
  <div className="centered">
    <PageHeader>Catch@Me</PageHeader>
    <p><em>{`
      Catch@Me is the next ARG trend. Also I made it to fuck around with my
      friends, so keep your expectations and the server load down.
      `}</em></p>
    <Button
      onClick={onJoin}
      bsStyle="primary"
      bsSize="large"
    >Start!</Button>
  </div>
)

export default Splash;
