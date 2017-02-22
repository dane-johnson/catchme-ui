import React from 'react'
import { FormGroup, FormControl,
   ControlLabel, Button, PageHeader } from 'react-bootstrap'

import '../css/position.css'

const Join = ({onChange, onSubmit}) => (
  <div className="centered">
    <PageHeader> Join Game </PageHeader>
    <form>
      <Field id={0} label="Name" onChange={onChange} type="text" />
      <Field id={1} label="Room" onChange={onChange} type="text" />
      <Button bsStyle="primary" onClick={onSubmit}>Join</Button>
    </form>
  </div>
);

const Field = ({id, label, onChange, props}) => (
  <FormGroup>
    <ControlLabel>{label}</ControlLabel>
    <FormControl onChange={() => onChange(id)} {...props} />
  </FormGroup>
)

export default Join
