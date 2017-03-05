import React from 'react'
import { Well } from 'react-bootstrap'

const style = {
  userImage: {
    display: 'inline-block'
  },
  userInfo: {
    marginLeft: '70%',
    display: 'inline-block'
  }
}

const TargetPane = ({target}) => {
  if (!target) return null;
  return (
    <Well>
      <img alt="User" style={style.userImage}></img>
      <span style={style.userInfo}>Name: {target.name}</span>
    </Well>
  )
}

export default TargetPane
