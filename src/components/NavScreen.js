import React from 'react'

const NavScreen = ({position}) => (
  <div>
    {position &&
      <div>
        <span>{position.coords.latitude}</span>
        <span>{position.coords.longitude}</span>
        <span>{position.timestamp}</span>
      </div>
    }
  </div>
)

export default NavScreen
