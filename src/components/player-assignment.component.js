import React, { Component } from 'react';
import CheckBox from './check-box.component';

export default class PlayerAssignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      red: false,
      yellow: false,
      blue: false,
      green: false,
      purple: false,
      gray: false
    }
  }

  render() {
    return (
      <ul>
        {this.props.colors.map((color)=> <CheckBox bgColor={color}/>)}
      </ul>
    )
  }

}
