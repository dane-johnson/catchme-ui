import React from 'react'
import { connect } from 'react-redux'
import registerListener from '../lib/geowatcher'


import NavScreen from '../components/NavScreen'
import TargetPane from '../components/TargetPane'
import FeedPane from '../components/FeedPane'

const Ingame = ({position, target, feed}) => {
  return (
    <div>
      <NavScreen position={position}/>
      <TargetPane target={target}/>
      <FeedPane feed={feed}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  position: state.geo.position,
  target: state.ingame.target,
  feed: state.ingame.feed
})

export default connect(mapStateToProps)(Ingame)
