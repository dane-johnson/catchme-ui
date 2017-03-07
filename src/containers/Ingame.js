import React from 'react'
import { connect } from 'react-redux'


import NavScreen from '../components/NavScreen'

const Ingame = ({position, size, alive}) => {
  return (
    <div>
      <NavScreen position={position} size={size}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  position: state.geo.position,
  ...state.playerState
})

export default connect(mapStateToProps)(Ingame)
