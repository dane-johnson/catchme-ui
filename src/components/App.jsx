import React from 'react'
import { PageHeader, Button } from 'react-bootstrap'

const App = (props) => (
  <div>
    <style>{`
      .centered{
        text-align: center
      }
      `}</style>
    <div className="centered">
      <PageHeader>Catch@Me</PageHeader>
      <p><em>{`
        Catch@Me is the next ARG trend. Also I made it to fuck around with my
        friends, so keep your expectations and the server load down.
        `}</em></p>
      <Button
        onClick={props.onPress}
        bsStyle="primary"
         bsSize="large"
         >Start!</Button>
    </div>
  </div>
)

export default App;
