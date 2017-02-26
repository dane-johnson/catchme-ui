import React from 'react'
import { FormGroup, FormControl,
   ControlLabel, Button, PageHeader } from 'react-bootstrap'

import '../css/position.css'

class Join extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      roomCode: ""
    }
  }

  render() {
    const onSubmit = (username, roomCode) => {
      this.props.onSubmit(this.state.username, this.state.roomCode)
    };
    const onChangeUsername = (username) => this.setState({username})
    const onChangeRoomCode = (roomCode) => this.setState({roomCode});
    return (
      <div className="centered">
        <PageHeader> Join Game </PageHeader>
        <form>
          <Field id={0} label="Name" onChange={onChangeUsername} type="text" />
          <Field id={1} label="Room" onChange={onChangeRoomCode} type="text" />
          <Button bsStyle="primary" onClick={onSubmit}>Join</Button>
        </form>
      </div>
    )
  }
}

const Field = ({id, label, onChange, props}) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <FormControl onChange={(ev) => onChange(ev.target.value)} {...props} />
  </FormGroup>
)

export default Join
