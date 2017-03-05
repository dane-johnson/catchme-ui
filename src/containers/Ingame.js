import React from 'react'
import { connect } from 'react-redux'
import registerListener from '../lib/geowatcher'


import NavScreen from '../components/NavScreen'
import TargetPane from '../components/TargetPane'
import FeedPane from '../components/FeedPane'

const Ingame = ({position, target}) => {
  return (
    <div>
      <NavScreen position={position}/>
      <TargetPane />
      <FeedPane />
    </div>
  )
}

const mapStateToProps = (state) => ({
  position: state.geo.position,
  target: state.joinState.username
})

export default connect(mapStateToProps)(Ingame)
