import React from 'react'
import { connect } from 'react-redux'
import { switchContext } from '../actions'

import Splash from '../components/Splash'

const Welcome = ({dispatch}) => (
  <Splash onJoin={() => dispatch(switchContext('PREGAME'))} />
)

export default connect()(Welcome);
