import React from 'react'
import { connect } from 'react-redux'
import { switchContext } from '../actions'

import Splash from '../components/Splash'

const PregameContainer = ({dispatch}) => (
  <Splash onJoin={() => dispatch(switchContext('JOIN'))} />
)

export default connect()(PregameContainer);
