import React from 'react'
import { Well } from 'react-bootstrap'

const style = {
  listStyle: 'none'
}

const FeedPane = ({feed}) => {
  const items = feed.map((item, key) => <li key={key}>{item}</li>)
  return (
    <Well>
      <ul style={style}>
        {items}
      </ul>
    </Well>
  )
}

export default FeedPane
