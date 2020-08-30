import React from 'react'

export const Card = (props) => (
  <div style={{
    width: '99%',
    margin: '10px auto 10px auto',
    boxShadow: '0px 5px 10px 2px rgba(0, 0, 0, 0.25)',
    padding: '5px'
  }}>
  {props.children}
  </div>
)
