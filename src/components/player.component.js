import React from 'react'
import InputDisplay from './input-display.component'

export const Player = (props) => (
  <div style={{
    textAlign: 'center',
    width: '50%',
    float: props.float,
    backgroundColor: props.color
  }}>
    <InputDisplay width='50%' float='left' placeholder='Player' inputType='Change Name'/>
    <InputDisplay width='50%' float='Right' placeholder='Strategy Card' inputType='Change Strategy Card'/>
  </div>
)
