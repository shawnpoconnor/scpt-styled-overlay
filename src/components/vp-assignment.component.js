import React from 'react';
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
      <h3>{props.card}</h3>
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
