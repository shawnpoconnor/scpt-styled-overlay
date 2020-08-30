import React from 'react';
import Dropdown from './dropdown.component';
import PlayerAssignment from './player-assignment.component';

export const VpAssignment = (props) => (
  <ul style={{
    width: "100%"
  }}>
    <li style={{
      width: '33%',
      display: 'inline-block',
      width: '16.6%'
    }}>
      <Dropdown options={props.options}/>
    </li>
    <li style={{
      width: '66%',
      display: 'inline-block',
      width: '16.6%'
    }}>
      <PlayerAssignment/>
    </li>
  </ul>
)
